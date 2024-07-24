'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { resetActions } from '@/app/(auth)/reset/actions'
import { ResetSchema } from '@/schemas/auth'

import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Button } from '../ui/button'
import { Header } from './header'
import { InputWithLabel } from './input-with-label'

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
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <Header
        title="Forgot your password?"
        subtitle="Enter your email to receive reset instructions."
      />

      <form onSubmit={handleSubmit(onSubmit)} className="mb-4 mt-8">
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
