import { LoginForm } from '@/components/auth/login-form'

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <div className="flex h-full w-1/2 flex-col items-center justify-center gap-16">
        <img src="/intelli-guide-2.png" alt="" className="w-80" />
        <LoginForm />
      </div>
      <div className="h-full w-1/2">
        <div className="flex h-full w-full flex-col items-center justify-center gap-16 bg-primary px-8">
          <img src="/Questions-bro.svg" alt="" className="w-1/2" />
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

export default LoginPage
