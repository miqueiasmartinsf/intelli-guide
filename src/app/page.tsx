"use client";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/Nav";
import { SectionHome } from "@/components/SectionHome";
import MenuHome from "@/components/MenuHome";

export default function Home() {

    return (
        <div>
            <section className="min-h-screen px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <header className="flex items-center justify-between py-6">
                    <h1 className="text-3xl">IntelliGuide</h1>
                    <Nav.Root>
                        <Nav.Item>
                            <Nav.Link>
                                Início
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                Contato
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                Sobre
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="auth/login">
                                Entrar
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="auth/register" isDefaultStyle={false}>
                                <Button>Cadastrar</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav.Root>

                    <MenuHome/>
                </header>

                <SectionHome.Root imageUrl="/Questions-bro.svg" /* default: imagePosition="right" */ >
                    <SectionHome.Title>Desafie sua mente, aprenda e divirta-se!</SectionHome.Title>
                    <SectionHome.Paragraph>
                        Escolha entre uma variedade de temas e teste seus
                        conhecimentos com nossos quizzes divertidos e
                        desafiadores. Compartilhe com seus amigos e veja
                        quem se sai melhor. Boa sorte e aproveite a jornada
                        de aprendizado!
                    </SectionHome.Paragraph>
                    <SectionHome.Button text="Começar agora!" />
                </SectionHome.Root>

            </section>

            <section className="flex min-h-screen items-center bg-primary px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <SectionHome.Root imageUrl="/Questions-bro.svg" imagePosition="left">
                    <SectionHome.Title>Desafie sua mente, aprenda e divirta-se!</SectionHome.Title>
                    <SectionHome.Paragraph>
                        Escolha entre uma variedade de temas e teste seus
                        conhecimentos com nossos quizzes divertidos e
                        desafiadores. Compartilhe com seus amigos e veja
                        quem se sai melhor. Boa sorte e aproveite a jornada
                        de aprendizado!
                    </SectionHome.Paragraph>
                    <SectionHome.Button text="Começar agora!" variant="secondary"/>
                </SectionHome.Root>
            </section>

            <section className="min-h-screen px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <SectionHome.Root imageUrl="/Questions-bro.svg" /* default: imagePosition="right" */ >
                    <SectionHome.Title>Desafie sua mente, aprenda e divirta-se!</SectionHome.Title>
                    <SectionHome.Paragraph>
                        Escolha entre uma variedade de temas e teste seus
                        conhecimentos com nossos quizzes divertidos e
                        desafiadores. Compartilhe com seus amigos e veja
                        quem se sai melhor. Boa sorte e aproveite a jornada
                        de aprendizado!
                    </SectionHome.Paragraph>
                    <SectionHome.Button text="Começar agora!" />
                </SectionHome.Root>
            </section>
        </div>
    );
}
