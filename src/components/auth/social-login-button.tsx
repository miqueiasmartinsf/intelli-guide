"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

import { BottomGradient } from "./bottom-gradient";

export const SocialLoginButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const onClick = (provider: string) => {
        signIn(provider, {
            callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        });
    };

    return (
        <>
            <div>
                <button
                    className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="button"
                    onClick={() => onClick("github")}
                >
                    <FaGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        GitHub
                    </span>
                    <BottomGradient />
                </button>
            </div>
            <div>
                <button
                    className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    type="button"
                    onClick={() => onClick("google")}
                >
                    <FcGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                        Google
                    </span>
                    <BottomGradient />
                </button>
            </div>
        </>
    );
};
