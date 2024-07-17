import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <div className="px-60">
                <section className="h-screen">
                    <header className="flex justify-between py-6 items-center">
                        <h1 className="text-3xl">IntelliGuide</h1>
                        <nav>
                            <ul className="flex gap-4 items-center">
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
                    <div className="flex h-full">
                        <div className="w-1/2 h-full flex flex-col items-start justify-center">
                            <h2 className="text-3xl w-11/12">
                                Desafie sua mente, aprenda e divirta-se!
                            </h2>
                            <p className="mt-8 w-11/12">
                                Escolha entre uma variedade de temas e teste
                                seus conhecimentos com nossos quizzes divertidos
                                e desafiadores. Compartilhe com seus amigos e
                                veja quem se sai melhor. Boa sorte e aproveite a
                                jornada de aprendizado!
                            </p>
                        </div>
                        <div className="w-1/2 h-full flex flex-col items-end justify-center">
                            <img
                                src="/Questions-bro.svg"
                                alt=""
                                className="w-1/2"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <header></header>
                    <div></div>
                </section>
                <section>
                    <header></header>
                    <div></div>
                </section>
                <section>
                    <header></header>
                    <div></div>
                </section>
            </div>
        </div>
    );
}
