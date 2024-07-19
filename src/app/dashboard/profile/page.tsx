"use client";
import { InputWithLabel } from "@/components/auth";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function ProfilePage() {
    const [error, setError] = useState<string | undefined>("");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <div className="h-full w-full max-w-[912px] px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Perfil</h1>
            <div>
                <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
                        <Image
                            height={56}
                            width={56}
                            src={""}
                            alt="Foto perfil"
                        />
                    </div>
                    <div className="flex gap-5">
                        <Button variant={"outline"} className="text-primary">
                            Alterar foto
                        </Button>
                        <Button variant={"destructive"}>Apagar foto</Button>
                    </div>
                </div>
                <div className="mt-8">
                    <InputWithLabel
                        id="email"
                        label="Nome"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        className="mb-4"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputWithLabel
                        id="email"
                        label="Endereço de email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        className="mb-4"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputWithLabel
                        id="email"
                        label="Nome"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        className="mb-4"
                        register={register}
                        error={errors.email?.message}
                    />
                    <InputWithLabel
                        id="email"
                        label="Endereço de email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        className="mb-4"
                        register={register}
                        error={errors.email?.message}
                    />

                    <InputWithLabel
                        id="password"
                        label="Senha"
                        placeholder="••••••••"
                        type="password"
                        className="mb-1"
                        register={register}
                        error={errors.password?.message}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
