"use server";

import { getUserByEmail } from "@/data/auth/user";
import { getVerificationTokenByToken } from "@/data/auth/verification-token";
import { db } from "@/services/database";

export const newVerificationActions = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);

    if (!existingToken) {
        return { error: "Token does not exists!" };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
        return { error: "Token expired!" };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
        return { error: "Email does not exists!" };
    }

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email,
        },
    });

    await db.verificationToken.delete({
        where: { id: existingToken.id },
    });

    return { success: "Email verified!" };
};
