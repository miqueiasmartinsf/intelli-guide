'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'

import { newVerificationActions } from '@/app/(auth)/new-verification/actions'

import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import { Header } from './header'

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')

  const searchParams = useSearchParams()
  const router = useRouter()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Missing token!')

      return
    }

    newVerificationActions(token)
      .then((data) => {
        setSuccess(data.success)
        setError(data.error)

        if (data.success) {
          router.push('/login')
        }
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-4 shadow-input dark:bg-black md:rounded-2xl md:p-8">
      <Header
        title="Verify Your Email"
        subtitle="Please confirm your email to continue."
      />

      <div className="mt-8 flex w-full items-center justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </div>
  )
}
