import nodemailer from 'nodemailer'

// Configuração do transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME, // Seu endereço de e-mail
    pass: process.env.EMAIL_APP_PASSWORD, // Sua senha de e-mail
  },
})

const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await transporter.sendMail({
    from: '"Onboarding" <wesleyribas2015@gmail.com>', // Remetente
    to: email, // Destinatário
    subject: '2FA code', // Assunto do E-mail
    html: `<p>Your 2FA code is <b>${token}</b></p>`, // Corpo do e-mail
  })
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`

  await transporter.sendMail({
    from: '"Onboarding" <wesleyribas2015@gmail.com>',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`

  await transporter.sendMail({
    from: '"Onboarding" <wesleyribas2015@gmail.com>',
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
  })
}
