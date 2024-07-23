"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { registerAction } from "@/app/(auth)/(credentials)/register/actions";
import {
    BottomGradient,
    Header,
    InputWithLabel,
    SocialLoginButton,
} from "@/components/auth";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { RegisterSchema } from "@/schemas/auth";

import { Button } from "../ui/button";

export const RegisterForm = () => {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof RegisterSchema>>({
        mode: "onChange",
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            registerAction(values).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-none bg-white p-2 shadow-input dark:bg-black md:rounded-2xl md:p-8">
            <Header
                title="Welcome to OBC-Gamified"
                subtitle="Sign up to explore the gamified learning experience."
            />

            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-8">
                <div className="mb-4 flex flex-col space-y-1 md:flex-row md:space-x-2 md:space-y-0">
                    <InputWithLabel
                        id="name"
                        label="Full Name"
                        placeholder="John Doe"
                        register={register}
                        error={errors.name?.message}
                    />
                </div>
                <InputWithLabel
                    id="email"
                    label="Email Address"
                    placeholder="projectmayhem@fc.com"
                    type="email"
                    className="mb-4"
                    register={register}
                    error={errors.email?.message}
                />
                <InputWithLabel
                    id="password"
                    label="Password"
                    placeholder="••••••••"
                    type="password"
                    className="mb-4"
                    register={register}
                    error={errors.password?.message}
                />
                <InputWithLabel
                    id="password_confirmation"
                    label="Confirm Password"
                    placeholder="••••••••"
                    type="password"
                    className="mb-8"
                    register={register}
                    error={errors.password_confirmation?.message}
                />

                <FormError message={error} />
                <FormSuccess message={success} />

                <button
                    className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isPending}
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="flex flex-col space-y-4">
                    <SocialLoginButton />
                </div>

                <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="mt-4 flex justify-center font-normal"
                >
                    <Link href="/auth/login">Already have an account</Link>
                </Button>
            </form>
        </div>
    );
};
