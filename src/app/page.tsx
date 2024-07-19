"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";

export default function Home() {
    const [menuAppearence, SetMenuAppearence] = useState<boolean>(false);

    return (
        <div>
            <section className="px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <header className="flex items-center justify-between py-8 max-2xl:py-6">
                    <Link href={"/"}>
                        <img
                            src="/intelli-guide.png"
                            className="max-w-[350px] max-2xl:w-[250px]"
                            alt=""
                        />
                    </Link>
                    <nav className="max-lg:hidden">
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link
                                    href={"/#"}
                                    className="nav-link text-xl max-2xl:text-base"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/#"}
                                    className="nav-link text-xl max-2xl:text-base"
                                >
                                    Contato
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/#"}
                                    className="nav-link text-xl max-2xl:text-base"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/auth/login"}
                                    className="nav-link text-xl max-2xl:text-base"
                                >
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link href={"/auth/register"}>
                                    <Button className="px-6 py-6 text-xl max-2xl:p-4 max-2xl:text-base">
                                        Cadastrar
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="z-10 hidden flex-col items-end gap-2 max-lg:flex"
                        onClick={() => SetMenuAppearence(!menuAppearence)}
                    >
                        <div
                            className={
                                menuAppearence
                                    ? "h-1 w-10 translate-y-3 rotate-[-225deg] rounded-sm bg-black transition-all duration-300 ease-in-out"
                                    : "h-1 w-10 rounded-sm bg-black transition-all duration-300 ease-in-out"
                            }
                        ></div>
                        <div
                            className={
                                menuAppearence
                                    ? "hidden transition-all duration-300 ease-in-out"
                                    : "h-1 w-9 rounded-sm bg-black transition-all duration-300 ease-in-out"
                            }
                        ></div>
                        <div
                            className={
                                menuAppearence
                                    ? "h-1 w-10 rotate-[225deg] rounded-sm bg-black transition-all duration-300 ease-in-out"
                                    : "h-1 w-7 rounded-sm bg-black transition-all duration-300 ease-in-out"
                            }
                        ></div>
                    </div>
                </header>
                <div className="flex h-full items-center py-36">
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-7xl max-2xl:text-5xl">
                            Desafie sua mente, aprenda e divirta-se!
                        </h2>
                        <p className="mt-8 w-11/12 text-xl max-2xl:text-base">
                            Escolha entre uma variedade de temas e teste seus
                            conhecimentos com nossos quizzes divertidos e
                            desafiadores. Compartilhe com seus amigos e veja
                            quem se sai melhor. Boa sorte e aproveite a jornada
                            de aprendizado!
                        </p>
                        <Button
                            className="mt-8 px-14 py-6 text-2xl max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                    <div className="max-lg flex h-full w-5/12 flex-col items-end justify-center max-lg:hidden">
                        <img
                            src="/Questions-bro.svg"
                            className="max-w-[500px] max-2xl:w-80"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <section className="flex items-center bg-primary px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <div className="flex h-full items-center gap-10 py-36 max-lg:flex-col">
                    <div className="flex h-full w-5/12 flex-col items-start justify-center max-lg:w-full">
                        <img
                            src="/Questions-bro.svg"
                            className="max-w-[500px] max-2xl:w-96"
                            alt=""
                        />
                    </div>
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-7xl text-white max-2xl:text-5xl">
                            Descubra Quanto Você Sabe sobre Diversos Temas!{" "}
                        </h2>
                        <p className="mt-8 w-11/12 text-xl text-white max-2xl:text-base">
                            Descubra Quanto Você Sabe sobre Diversos Temas!
                            Explore uma variedade de quizzes desafiadores em
                            história, ciência, esportes e muito mais. Teste seus
                            conhecimentos, descubra fatos interessantes e
                            divirta-se enquanto aprende!
                        </p>
                        <Button
                            variant={"outline"}
                            className="mt-8 px-14 py-6 text-2xl max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                </div>
            </section>
            <section className="px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <div className="flex h-full items-center gap-10 py-36 max-lg:flex-col">
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-7xl max-2xl:text-5xl">
                            Explore Nossos Quizzes em Diversos Temas!
                        </h2>
                        <p className="mt-8 w-11/12 text-xl max-2xl:text-base">
                            Em nosso site, cada quiz é uma oportunidade de
                            diversão e aprendizado. Com uma coleção
                            diversificada de quizzes em temas como história,
                            ciência e cultura pop, garantimos atualizações
                            frequentes e uma experiência de usuário intuitiva
                            para expandir seu repertório de conhecimentos.
                        </p>
                        <Button
                            className="mt-8 px-14 py-6 text-2xl max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                    <div className="flex h-full w-5/12 flex-col items-end justify-center max-lg:w-full">
                        <img
                            src="/Questions-bro.svg"
                            className="max-w-[500px] max-2xl:w-96"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
