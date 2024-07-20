'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Footer } from '@/components/footer'
import MenuHome from '@/components/landingPage/MenuHome'
import { Nav } from '@/components/landingPage/Nav'
import { SectionHome } from '@/components/landingPage/SectionHome'
import { Button } from '@/components/ui/button'
import ImgIntelliGuide from '@/public/intelli-guide.png'
import ImgInterrogation from '@/public/interrogation.svg'
import ImgProblemSolving from '@/public/problem-solving.svg'
import ImgQuestionsBro from '@/public/Questions-bro.svg'

export default function Home() {
  const [menuAppearence, SetMenuAppearence] = useState<boolean>(false)

  return (
    <div>
      <section className="min-h-screen px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
        <header className="flex items-center justify-between py-6">
          <Link href={'/'}>
            <div className="max-w-[350px] max-2xl:w-[250px]"></div>
            <Image src={ImgIntelliGuide} alt="" width={350} height={80} />
          </Link>
          <Nav.Root>
            <Nav.Item>
              <Nav.Link>Início</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Sobre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="auth/login">Entrar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="auth/register" isDefaultStyle={false}>
                <Button>Cadastrar</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav.Root>

          <MenuHome />
        </header>

        <SectionHome.Root
          imageUrl={ImgQuestionsBro} /* default: imagePosition="right" */
        >
          <SectionHome.Title>
            Desafie sua mente, aprenda e divirta-se!
          </SectionHome.Title>
          <SectionHome.Paragraph>
            Escolha entre uma variedade de temas e teste seus conhecimentos com
            nossos quizzes divertidos e desafiadores. Compartilhe com seus
            amigos e veja quem se sai melhor. Boa sorte e aproveite a jornada de
            aprendizado!
          </SectionHome.Paragraph>
          <SectionHome.Button text="Começar agora!" />
        </SectionHome.Root>
      </section>

      <section className="flex min-h-screen items-center bg-primary px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
        <SectionHome.Root imageUrl={ImgInterrogation} imagePosition="left">
          <SectionHome.Title>
            Desafie sua mente, aprenda e divirta-se!
          </SectionHome.Title>
          <SectionHome.Paragraph>
            Escolha entre uma variedade de temas e teste seus conhecimentos com
            nossos quizzes divertidos e desafiadores. Compartilhe com seus
            amigos e veja quem se sai melhor. Boa sorte e aproveite a jornada de
            aprendizado!
          </SectionHome.Paragraph>
          <SectionHome.Button text="Começar agora!" variant="secondary" />
        </SectionHome.Root>
      </section>

      <section className="min-h-screen px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
        <SectionHome.Root
          imageUrl={ImgProblemSolving} /* default: imagePosition="right" */
        >
          <SectionHome.Title>
            Desafie sua mente, aprenda e divirta-se!
          </SectionHome.Title>
          <SectionHome.Paragraph>
            Escolha entre uma variedade de temas e teste seus conhecimentos com
            nossos quizzes divertidos e desafiadores. Compartilhe com seus
            amigos e veja quem se sai melhor. Boa sorte e aproveite a jornada de
            aprendizado!
          </SectionHome.Paragraph>
          <SectionHome.Button text="Começar agora!" />
        </SectionHome.Root>
      </section>
      <Footer />
    </div>
  )
}
