"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import ImgIntelliGuide from "@/public/intelli-guide.png";
import ImgInterrogation from "@/public/interrogation.svg";
import ImgProblemSolving from "@/public/problem-solving.svg";
import ImgQuestionsBro from "@/public/Questions-bro.svg";

export default function Home() {
    const [menuAppearence, SetMenuAppearence] = useState<boolean>(false);

    return (
        <div>
            <section className="px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6">
                <header className="flex items-center justify-between py-8 max-2xl:py-6">
                    <Link href={"/"}>
                        <div className="relative max-w-[300px] max-2xl:w-[250px] max-sm:w-[150px]">
                            <Image src={ImgIntelliGuide} alt="" />
                        </div>
                    </Link>
                    <nav className="max-lg:hidden">
                        <ul className="flex items-center gap-4">
                            <li>
                                <Link
                                    href={"/#"}
                                    className="nav-link text-lg max-2xl:text-base"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/#sobre"}
                                    className="nav-link text-lg max-2xl:text-base"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/#aprendizado"}
                                    className="nav-link text-lg max-2xl:text-base"
                                >
                                    Aprendizado
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/login"}
                                    className="nav-link text-lg max-2xl:text-base"
                                >
                                    Entrar
                                </Link>
                            </li>
                            <li>
                                <Link href={"/register"}>
                                    <Button className="p-4 text-lg max-2xl:p-4 max-2xl:text-base">
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
                                    ? "h-1 w-10 translate-y-3 rotate-[-225deg] rounded-sm bg-white transition-all duration-300 ease-in-out"
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
                                    ? "h-1 w-10 rotate-[225deg] rounded-sm bg-white transition-all duration-300 ease-in-out"
                                    : "h-1 w-7 rounded-sm bg-black transition-all duration-300 ease-in-out"
                            }
                        ></div>
                    </div>
                    {menuAppearence && (
                        <div className="bg-base absolute right-0 top-0 flex h-screen w-1/2 justify-center border-l border-white bg-primary py-40">
                            <ul className="flex flex-col gap-5 transition-all duration-300 ease-in-out">
                                <li
                                    className="nav-link text-white"
                                    onClick={() => SetMenuAppearence(false)}
                                >
                                    <Link href="/#">Início</Link>
                                </li>
                                <li
                                    className="nav-link text-white"
                                    onClick={() => SetMenuAppearence(false)}
                                >
                                    <Link href="/#sobre">Sobre</Link>
                                </li>
                                <li
                                    className="nav-link text-white"
                                    onClick={() => SetMenuAppearence(false)}
                                >
                                    <Link href="/#aprendizado">
                                        Aprendizado
                                    </Link>
                                </li>
                                <li
                                    className="nav-link text-white"
                                    onClick={() => SetMenuAppearence(false)}
                                >
                                    <Link href="/login">Entrar</Link>
                                </li>
                                <li className="nav-link text-white">
                                    <Link href="/register">
                                        <Button
                                            variant={"outline"}
                                            className="text-primary"
                                        >
                                            Cadastrar
                                        </Button>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </header>
                <div className="flex h-full items-center py-36">
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-6xl max-2xl:text-5xl">
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
                            className="mt-8 px-10 py-4 text-lg max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                    <div className="max-lg flex h-full w-5/12 flex-col items-end justify-center max-lg:hidden max-lg:items-start">
                        <div className="relative max-w-[500px] max-2xl:w-80">
                            <Image src={ImgQuestionsBro} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="sobre"
                className="flex items-center bg-primary px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6"
            >
                <div className="flex h-full items-center gap-10 py-36 max-lg:flex-col">
                    <div className="flex h-full w-5/12 flex-col items-start justify-center max-lg:w-full">
                        <div className="max-w-[500px] max-2xl:w-96 max-lg:w-72">
                            <Image src={ImgInterrogation} alt="" />
                        </div>
                    </div>
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-6xl text-white max-2xl:text-5xl">
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
                            className="mt-8 px-10 py-4 text-lg max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                </div>
            </section>
            <section
                id="aprendizado"
                className="px-60 max-2xl:px-40 max-xl:px-20 max-md:px-10 max-sm:px-6"
            >
                <div className="flex h-full items-center gap-10 py-36 max-lg:flex-col">
                    <div className="flex h-full w-7/12 flex-col items-start justify-center max-lg:w-full">
                        <h2 className="w-11/12 text-6xl max-2xl:text-5xl">
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
                            className="mt-8 px-10 py-4 text-lg max-2xl:p-4 max-2xl:text-base"
                            size={"lg"}
                        >
                            Começar agora!
                        </Button>
                    </div>
                    <div className="flex h-full w-5/12 flex-col items-end justify-center max-lg:w-full max-lg:items-start">
                        <div className="relative max-w-[500px] max-2xl:w-96 max-lg:w-72">
                            <Image src={ImgProblemSolving} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
