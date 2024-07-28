"use server";

import { getUserSubscription } from "@/data";
import { absoluteUrl } from "@/lib/utils";
import { auth } from "@/services/auth";
import { stripe } from "@/services/stripe";

const returnUrl = absoluteUrl("/shop");

export const createStripeUrl = async () => {
    const session = await auth();
    const user = session?.user;
    const userId = user?.id;

    if (!userId || !user) {
        throw new Error("Unauthorized");
    }

    const userSubscription = await getUserSubscription();

    if (userSubscription && userSubscription.stripeCustomerId) {
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: userSubscription.stripeCustomerId,
            return_url: returnUrl,
        });

        return { data: stripeSession.url };
    }

    const stripeSession = await stripe.checkout.sessions.create({
        mode: "subscription",
        payment_method_types: ["card"],
        customer_email: user.email,
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: "BRL",
                    product_data: {
                        name: "Learn-Guide Pro",
                        description: "Vidas ilimitadas",
                    },
                    unit_amount: 2000, // R$ 20,00
                    recurring: {
                        interval: "month",
                    },
                },
            },
        ],
        metadata: {
            userId,
        },
        success_url: returnUrl,
        cancel_url: returnUrl,
    });

    return { data: stripeSession.url };
};
