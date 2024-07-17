import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 h-full flex items-center justify-center flex-col gap-16">
                <img src="/intelli-guide-2.png" alt="" className="w-80" />
                <LoginForm />
            </div>
            <div className="w-1/2 h-full">
                <div className="w-full h-full bg-primary flex justify-center flex-col items-center gap-16 px-8">
                    <img src="/Questions-bro.svg" alt="" className="w-1/2" />
                    <div className="flex items-center flex-col">
                        <h2 className="text-3xl text-white text-center w-11/12">
                            Desafie sua mente, aprenda e divirta-se!
                        </h2>
                        <p className="text-center mt-8 text-white w-11/12">
                            Escolha entre uma variedade de temas e teste seus
                            conhecimentos com nossos quizzes divertidos e
                            desafiadores. Compartilhe com seus amigos e veja
                            quem se sai melhor. Boa sorte e aproveite a jornada
                            de aprendizado!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
