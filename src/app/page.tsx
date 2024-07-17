import Image from 'next/image'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <div className="px-60">
        <section className="min-h-screen">
          <header className="flex items-center justify-between py-6">
            <h1 className="text-3xl">IntelliGuide</h1>
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <a href="" className="nav-link">
                    Início
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="" className="nav-link">
                    Entrar
                  </a>
                </li>
                <li>
                  <Button>Cadastrar</Button>
                </li>
              </ul>
            </nav>
          </header>
          <div className="flex h-full items-center py-36">
            <div className="flex h-full w-1/2 flex-col items-start justify-center">
              <h2 className="w-11/12 text-6xl">
                Desafie sua mente, aprenda e divirta-se!
              </h2>
              <p className="mt-8 w-11/12">
                Escolha entre uma variedade de temas e teste seus conhecimentos
                com nossos quizzes divertidos e desafiadores. Compartilhe com
                seus amigos e veja quem se sai melhor. Boa sorte e aproveite a
                jornada de aprendizado!
              </p>
              <Button className="mt-8" size={'lg'}>
                Começar agora!
              </Button>
            </div>
            <div className="flex h-full w-1/2 flex-col items-end justify-center">
              <Image src="/Questions-bro.svg" alt="" width={320} height={320} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
