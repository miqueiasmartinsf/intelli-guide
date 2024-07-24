import Image from 'next/image'
import ImgIntelliGuide from '@/public/intelli-guide.png'
import ImgQuestionBro from '@/public/Questions-bro.svg'
import { redirect } from 'next/navigation'

import { currentUser } from '@/lib/auth'
import Link from 'next/link'

async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await currentUser()

  if (user) {
    redirect('/settings')
  }

  return (
    <div className="flex h-screen">
      <div className="flex h-full w-1/2 flex-col items-center justify-center gap-16">
        <Link href={"/"}>
          <Image src={ImgIntelliGuide} alt="" width={320} height={56} />
        </Link>
        {children}
      </div>
      <div className="h-full w-1/2">
        <div className="flex h-full w-full flex-col items-center justify-center gap-16 bg-primary px-8">
          <Image src={ImgQuestionBro} alt="" width={328} height={328} />
          <div className="flex flex-col items-center">
            <h2 className="w-11/12 text-center text-3xl text-white">
              Desafie sua mente, aprenda e divirta-se!
            </h2>
            <p className="mt-8 w-11/12 text-center text-white">
              Escolha entre uma variedade de temas e teste seus conhecimentos
              com nossos quizzes divertidos e desafiadores. Compartilhe com seus
              amigos e veja quem se sai melhor. Boa sorte e aproveite a jornada
              de aprendizado!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
