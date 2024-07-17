'use client'

import { useState, useTransition } from 'react'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'
import { Header } from './header'
import { InputWithLabel } from './input-with-label'
import { useForm } from 'react-hook-form'
import { NewPasswordSchema } from '@/schemas/auth'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { newPasswordActions } from '@/app/auth/new-password/actions'

export const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    mode: 'onChange',
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      newPasswordActions(values, token).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Set your new password"
        subtitle="Please enter your new password."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
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
  )
}
