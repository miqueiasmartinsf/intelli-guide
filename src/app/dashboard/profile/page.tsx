'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { InputWithLabel } from '@/components/auth'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LoginSchema } from '@/schemas/auth'

function ProfilePage() {
    const [error, setError] = useState<string | undefined>('')

    const user = useCurrentUser()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<z.infer<typeof updateUserSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            name: user?.name ?? '',
            email: user?.email || '',
            password: '',
        },
    })

    const updateUserSchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        newPassword: z.string(),
        confirmPassword: z.string(),
    })

    const submitForm = (values: z.infer<typeof LoginSchema>) => { }

    return (
        <div className="h-full w-full px-3">
            <h1 className="text-2xl font-bold text-neutral-700">Perfil</h1>
            <div>
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
                        <Button variant={'outline'} className="text-primary">
                            Alterar foto
                        </Button>
                        <Button variant={'destructive'}>Apagar foto</Button>
                    </div>
                </div>
                <Separator className="my-8" />
                <div className="mt-8">
                    <form action="" onSubmit={handleSubmit(submitForm)}>
                        <InputWithLabel
                            id="name"
                            label="Nome"
                            type="text"
                            placeholder={user?.name ? user.name : 'N/A'}
                            className="mb-4"
                            register={register}
                            error={errors.email?.message}
                        />
                        <InputWithLabel
                            id="email"
                            label="Endereço de email"
                            type="email"
                            className="mb-4"
                            placeholder={user?.email ? user.email : 'N/A'}
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
                            <Button variant={'destructive'}>Cancelar</Button>
                            <Button type="submit">Salvar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;
