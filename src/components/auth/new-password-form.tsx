"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { newPasswordActions } from "@/app/(auth)/new-password/actions";
import { NewPasswordSchema } from "@/schemas/auth";

import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";
import { Header } from "./header";
import { InputWithLabel } from "./input-with-label";

export const NewPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof NewPasswordSchema>>({
        mode: "onChange",
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            newPasswordActions(values, token).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
            <Header
                title="Set your new password"
                subtitle="Please enter your new password."
            />

            <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-8">
                <div className="mb-4">
                    <InputWithLabel
                        id="password"
                        label="New Password"
                        placeholder="••••••••"
                        type="password"
                        register={register}
                        error={errors.password?.message}
                    />
                </div>

                <FormError message={error} />
                <FormSuccess message={success} />

                <Button type="submit" disabled={isPending} className="w-full">
                    Set new password
                </Button>
            </form>
        </div>
    );
};
