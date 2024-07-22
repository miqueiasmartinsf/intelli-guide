
"use client";
import { InputWithLabel } from "@/components/auth";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileActions } from "./actions";
import { Session } from "next-auth";
import { User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

function ProfilePage() {
    const [error, setError] = useState<string | undefined>("");
    const [userData, setUser] = useState<Session | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const updateUserSchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        newPassword: z.string(),
        confirmPassword: z.string(),
    });

    useEffect(() => {
        const getUserData = async () => {
            const authData = await profileActions();
            setUser(authData);
        };

        getUserData();
    }, []);

    const submitForm = (values: z.infer<typeof LoginSchema>) => {};

    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Perfil</h1>
            <div>
                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-2">
                        {userData?.user.image && (
                            <Image
                                height={56}
                                width={56}
                                src={userData?.user.image}
                                alt="Foto perfil"
                                className="rounded-full"
                            />
                        )}
                        {!userData?.user.image && <User color="#c9c9c9" />}
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
                    <form action="" onSubmit={handleSubmit(submitForm)}>
                        <InputWithLabel
                            id="name"
                            label="Nome"
                            type="text"
                            placeholder={
                                userData?.user.name
                                    ? userData?.user.name
                                    : "N/A"
                            }
                            className="mb-4"
                            register={register}
                            error={errors.email?.message}
                        />
                        <InputWithLabel
                            id="email"
                            label="Endereço de email"
                            type="email"
                            className="mb-4"
                            placeholder={
                                userData?.user.email
                                    ? userData?.user.email
                                    : "N/A"
                            }
                            register={register}
                            error={errors.email?.message}
                        />
                        <InputWithLabel
                            id="password"
                            label="Senha"
                            type="password  "
                            className="mb-4"
                            placeholder="••••••••"
                            register={register}
                            error={errors.email?.message}
                        />
                        <InputWithLabel
                            id="newPassword"
                            label="Nova senha"
                            type="password"
                            className="mb-4"
                            placeholder="••••••••"
                            register={register}
                            error={errors.email?.message}
                        />

                        <InputWithLabel
                            id="confirmPassword"
                            label="Confirme a senha"
                            placeholder="••••••••"
                            type="password"
                            className="mb-1"
                            register={register}
                            error={errors.password?.message}
                        />

                        <div className="mt-8 flex justify-end gap-5">
                            <Button variant={"destructive"}>Cancelar</Button>
                            <Button type="submit">Salvar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
