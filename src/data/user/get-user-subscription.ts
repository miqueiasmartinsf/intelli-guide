import { useCurrentUser } from "@/hooks/use-current-user";
import { db } from "@/services/database";
import { DAY_IN_MS } from "@/utils/constants";

export const getUserSubscription = async () => {
  try {
    const user = await useCurrentUser(); 

    if (!user?.id) return null;

    const data = await db.userSubscription.findFirst({
      where: { userId: user.id },
    });

    if (!data) return null;

    const isActive = data.stripePriceId && new Date(data.stripeCurrentPeriodEnd).getTime() + DAY_IN_MS > Date.now();

    return {
      ...data,
      isActive: !!isActive,
    };
  } catch {
    return null;
  }
};