import { auth } from "@/services/auth";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export const profileActions = async (): Promise<Session | null> => {
    const authData = await getSession();
    console.log(authData);
    return authData;
};
