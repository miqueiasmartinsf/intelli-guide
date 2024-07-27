import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { ExitModal } from '@/components/modals/exit-modal'
import { HeartsModal } from '@/components/modals/hearts-modal'
import { PracticeModal } from '@/components/modals/practice-modal'
import { Toaster } from '@/components/ui/sonner'
import { auth } from '@/services/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'IntelliGuide',
    template: '%s | IntelliGuide',
  },
  description: `IntelliGuide é um website de ensino gamificado que transforma o aprendizado em uma experiência divertida e competitiva.`,
  openGraph: {
    title: 'IntelliGuide',
    description: `IntelliGuide é um website de ensino gamificado que transforma o aprendizado em uma experiência divertida e competitiva.`,
    type: 'website',
    locale: 'pt_BR',
    url: 'https://inteliguide.vercel.app',
    siteName: 'IntelliGuide',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <html lang="pt">
        <body className={inter.className}>
          <Toaster />
          <ExitModal />
          <HeartsModal />
          <PracticeModal />
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
