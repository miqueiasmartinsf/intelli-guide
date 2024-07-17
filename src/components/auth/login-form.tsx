'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { loginActions } from '@/app/auth/(credentials)/login/actions'
import {
  BottomGradient,
  Header,
  InputWithLabel,
  SocialLoginButton,
} from '@/components/auth'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { LoginSchema } from '@/schemas/auth'

import { Button } from '../ui/button'

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
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <Header
        title="Welcome back to OBC-Gamified"
        subtitle="Log in to continue your gamified learning experience."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-8">
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
              className="mb-3 flex justify-end px-0 font-semibold"
            >
              <Link href="/auth/reset">Forgot password?</Link>
            </Button>
          </>
        )}

        <FormError message={error || errorUrl} />
        <FormSuccess message={success} />

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-primary to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isPending}
        >
          {showTwoFactor ? 'Confirm' : 'Sing up ->'}
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>

      <div className="flex flex-col space-y-4">
        <SocialLoginButton />
      </div>

      <Button
        size="sm"
        variant="link"
        asChild
        className="mt-4 flex justify-center font-semibold"
      >
        <Link href="/auth/register">Don&apos;t have an account ?</Link>
      </Button>
    </div>
  )
}
