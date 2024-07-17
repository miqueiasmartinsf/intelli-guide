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
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginSchema } from '@/schemas/auth'

import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { loginActions } from '@/app/auth/login/actions'

export const LoginForm = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const errorUrl =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with a different provider'
      : ''

  const [showTwoFactor, setShowTwoFactor] = useState(false)
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      loginActions(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            reset({ email: '', password: '' })
            setError(data.error)
          }

          if (data?.success) {
            reset({ email: '', password: '' })
            setSuccess(data.success)
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true)
          }
        })
        .catch(() => setError('Something went wrong!'))
    })
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Welcome back to OBC-Gamified"
        subtitle="Log in to continue your gamified learning experience."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
        {showTwoFactor && (
          <>
            <InputWithLabel
              id="twoFactor"
              label="Two Factor Code"
              placeholder="123456"
              type="text"
              className="mb-4"
              register={register}
              error={errors.code?.message}
            />
          </>
        )}

        {!showTwoFactor && (
          <>
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
              className="mb-1"
              register={register}
              error={errors.password?.message}
            />

            <Button
              size="sm"
              variant="link"
              asChild
              className="px-0 font-normal flex justify-end mb-3"
            >
              <Link href="/auth/reset">Forgot password?</Link>
            </Button>
          </>
        )}

        <FormError message={error || errorUrl} />
        <FormSuccess message={success} />

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isPending}
        >
          {showTwoFactor ? 'Confirm' : 'Sing up ->'}
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>

      <div className="flex flex-col space-y-4">
        <SocialLoginButton />
      </div>

      <Button
        size="sm"
        variant="link"
        asChild
        className="font-normal flex justify-center mt-4"
      >
        <Link href="/auth/register">Don&apos;t have an account ?</Link>
      </Button>
    </div>
  )
}
