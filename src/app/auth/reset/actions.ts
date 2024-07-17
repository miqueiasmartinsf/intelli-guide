'use server'

import * as z from 'zod'

import { ResetSchema } from '@/schemas/auth'
import { getUserByEmail } from '@/data/user'
import { sendPasswordResetEmail } from '@/services/mail'
import { generatePasswordResetToken } from '@/services/token'

export const resetActions = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid email!' }
  }

  const { email } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return { error: 'Email not found!' }
  }

  const passwordResetToken = await generatePasswordResetToken(email)
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
  )

  return { success: 'Reset email sent!' }
}
