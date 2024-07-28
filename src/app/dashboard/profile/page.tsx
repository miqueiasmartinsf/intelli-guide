"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { InputWithLabel } from "@/components/auth";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useCurrentUser } from "@/hooks/use-current-user";

import { profileActions } from "./actions";
import { updateUserSchema } from "./schema";

function ProfilePage() {
    const user = useCurrentUser();

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const { update } = useSession();
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(updateUserSchema),
        defaultValues: {
            name: user?.name ?? "",
            email: user?.email || "",
            password: undefined,
            newPassword: undefined,
            isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
        },
    });

    const onSubmit = (values: z.infer<typeof updateUserSchema>) => {
        startTransition(() => {
            profileActions(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }

                    if (data.success) {
                        update();
                        setSuccess(data.success);
                    }
                })
                .catch(() => setError("Something went wrong!"));
        });
    };

    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold">Perfil</h1>
            <div className="w-full pt-6">
                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2">
                        {user?.image && (
                            <Image
                                height={56}
                                width={56}
                                src={user.image}
                                alt="Foto perfil"
                                className="rounded-full"
                            />
                        )}
                        {!user?.image && <User color="#c9c9c9" />}
                    </div>
                    <div className="flex gap-5">
                        <Button variant={"outline"} className="text-primary">
                            Alterar foto
                        </Button>
                        <Button variant={"destructive"}>Apagar foto</Button>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="mt-8">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <InputWithLabel
                                id="name"
                                label="Nome"
                                type="text"
                                placeholder={user?.name ? user.name : "N/A"}
                                className="mb-4"
                                register={form.register}
                                error={form.formState.errors.name?.message}
                            />
                            <InputWithLabel
                                id="email"
                                label="Endereço de email"
                                type="email"
                                className="mb-4"
                                placeholder={user?.email ? user.email : "N/A"}
                                register={form.register}
                                error={form.formState.errors.email?.message}
                            />
                            {user?.isOAuth === false && (
                                <>
                                    <InputWithLabel
                                        id="password"
                                        label="Senha"
                                        type="password"
                                        className="mb-4"
                                        placeholder="••••••••"
                                        register={form.register}
                                        error={
                                            form.formState.errors.password
                                                ?.message
                                        }
                                    />
                                    <InputWithLabel
                                        id="newPassword"
                                        label="Nova senha"
                                        type="password"
                                        className="mb-4"
                                        placeholder="••••••••"
                                        register={form.register}
                                        error={
                                            form.formState.errors.newPassword
                                                ?.message
                                        }
                                    />
                                    <FormField
                                        control={form.control} // Ajuste conforme necessário, pode ser necessário usar useFormContext se estiver usando context
                                        name="isTwoFactorEnabled"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                                <div className="space-y-0.5">
                                                    <FormLabel>
                                                        Two Factor
                                                        Authentication
                                                    </FormLabel>
                                                    <FormDescription>
                                                        Enable two factor
                                                        authentication for your
                                                        account
                                                    </FormDescription>
                                                </div>
                                                <FormControl>
                                                    <Switch
                                                        disabled={isPending}
                                                        checked={field.value}
                                                        onCheckedChange={
                                                            field.onChange
                                                        }
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                </>
                            )}

                            <FormError message={error} />
                            <FormSuccess message={success} />

                            <div className="mt-8 flex justify-end gap-5">
                                <Button
                                    variant={"destructive"}
                                    disabled={isPending}
                                >
                                    Cancelar
                                </Button>
                                <Button type="submit" disabled={isPending}>
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
