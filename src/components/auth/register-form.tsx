'use client'

import {
  BottomGradient,
  InputWithLabel,
  SocialLoginButton,
  Header,
} from '@/components/auth'
import { Button } from '../ui/button'
import Link from 'next/link'

import * as z from 'zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterSchema } from '@/schemas/auth'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { registerAction } from '@/app/auth/register/actions'

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof RegisterSchema>>({
    mode: 'onChange',
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      registerAction(values).then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
    })
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Welcome to OBC-Gamified"
        subtitle="Sign up to explore the gamified learning experience."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
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
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isPending}
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <SocialLoginButton />
        </div>

        <Button
          size="sm"
          variant="link"
          asChild
          className="font-normal flex justify-center mt-4"
        >
          <Link href="/auth/login">Already have an account</Link>
        </Button>
      </form>
    </div>
  )
}
