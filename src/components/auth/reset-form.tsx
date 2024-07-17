'use client'

import { useState, useTransition } from 'react'
import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'
import { Header } from './header'
import { InputWithLabel } from './input-with-label'
import { resetActions } from '@/app/auth/reset/actions'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ResetSchema } from '@/schemas/auth'
import { z } from 'zod'

export const ResetForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      resetActions(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <Header
        title="Forgot your password?"
        subtitle="Enter your email to receive reset instructions."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-4">
        <div className="mb-4">
          <InputWithLabel
            id="email"
            label="Email Address"
            placeholder="john.doe@example.com"
            type="email"
            register={register}
            error={errors.email?.message}
          />
        </div>

        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type="submit" disabled={isPending} className="w-full">
          Send reset email
        </Button>
      </form>
    </div>
  )
}
