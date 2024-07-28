import { db } from "@/services/database";

async function main() {
    console.log("Seeding database...");

    // Limpar os dados existentes
    await db.challengeOption.deleteMany({});
    await db.challenges.deleteMany({});
    await db.lessons.deleteMany({});
    await db.quizzes.deleteMany({});
    await db.categories.deleteMany({});

    // Criação de categorias
    const category1 = await db.categories.create({
        data: {
            id: 1,
            title: "Matemática",
            imageSrc: "https://i.ibb.co/xLhdmLx/Mathematics-rafiki.png",
            description:
                "Mergulhe no mundo dos números e resolva desafios intrigantes com nossa categoria de Matemática.",
        },
    });

    const category2 = await db.categories.create({
        data: {
            id: 2,
            title: "História",
            imageSrc:
                "https://i.ibb.co/DV9Dv7N/People-visiting-history-museum-bro.png",
            description:
                "Explore os eventos mais fascinantes do passado e teste seu conhecimento na nossa categoria de História.",
        },
    });

    const category3 = await db.categories.create({
        data: {
            id: 3,
            title: "Ciência",
            imageSrc: "https://i.ibb.co/zJ27Tww/Science-bro.png",
            description:
                "Descubra os mistérios do universo e desafie sua mente com nossa categoria de Ciência.",
        },
    });

    const category4 = await db.categories.create({
        data: {
            id: 4,
            title: "Geografia",
            imageSrc:
                "https://i.ibb.co/GxCMCPB/International-cooperation-bro.png",
            description:
                "Aventure-se pelos continentes e mares enquanto testa seus conhecimentos em Geografia.",
        },
    });

    const category5 = await db.categories.create({
        data: {
            id: 5,
            title: "Literatura",
            imageSrc: "https://i.ibb.co/8D0MZKC/Literature-rafiki.png",
            description:
                "Viaje através dos clássicos literários e prove que você é um verdadeiro conhecedor na nossa categoria de Literatura.",
        },
    });

    const programmingCategory = await db.categories.create({
        data: {
            id: 6,
            title: "Programação",
            imageSrc:
                "https://i.ibb.co/MSYjZw0/Software-code-testing-rafiki.png", // Substitua por uma URL de imagem válida
            description:
                "Desafie suas habilidades de codificação e resolva problemas complexos com nossa categoria de Programação.",
        },
    });
    // Criação de quizzes
    const quiz1 = await db.quizzes.create({
        data: {
            id: 1,
            title: "Quiz de Álgebra",
            description: "Teste seus conhecimentos em álgebra.",
            categoryId: category1.id,
            order: 1,
        },
    });

    const quiz2 = await db.quizzes.create({
        data: {
            id: 2,
            title: "Quiz de História Geral",
            description: "Teste seus conhecimentos em história geral.",
            categoryId: category2.id,
            order: 1,
        },
    });

    const quiz3 = await db.quizzes.create({
        data: {
            id: 3,
            title: "Quiz de Física",
            description: "Teste seus conhecimentos em física.",
            categoryId: category3.id,
            order: 1,
        },
    });

    const quiz4 = await db.quizzes.create({
        data: {
            id: 4,
            title: "Quiz de Geografia Física",
            description: "Teste seus conhecimentos em geografia física.",
            categoryId: category4.id,
            order: 1,
        },
    });

    const quiz5 = await db.quizzes.create({
        data: {
            id: 5,
            title: "Quiz de Literatura Clássica",
            description: "Teste seus conhecimentos em literatura clássica.",
            categoryId: category5.id,
            order: 1,
        },
    });

    const quizProgrammingJs = await db.quizzes.create({
        data: {
            id: 6,
            title: "Quiz de JavaScript",
            description: "Teste seus conhecimentos em JavaScript.",
            categoryId: programmingCategory.id,
            order: 1,
        },
    });

    const quizProgrammingPy = await db.quizzes.create({
        data: {
            id: 7,
            title: "Quiz de Python",
            description: "Teste seus conhecimentos em Python.",
            categoryId: programmingCategory.id,
            order: 2,
        },
    });

    // Criação de lições
    const lesson1 = await db.lessons.create({
        data: {
            id: 1,
            title: "Lição de Equações",
            quizId: quiz1.id,
            order: 1,
        },
    });

    const lesson2 = await db.lessons.create({
        data: {
            id: 2,
            title: "Lição de Revoluções",
            quizId: quiz2.id,
            order: 1,
        },
    });

    const lesson3 = await db.lessons.create({
        data: {
            id: 3,
            title: "Lição de Leis da Física",
            quizId: quiz3.id,
            order: 1,
        },
    });

    const lesson4 = await db.lessons.create({
        data: {
            id: 4,
            title: "Lição de Formação dos Continentes",
            quizId: quiz4.id,
            order: 1,
        },
    });

    const lesson5 = await db.lessons.create({
        data: {
            id: 5,
            title: "Lição sobre Homero",
            quizId: quiz5.id,
            order: 1,
        },
    });

    const lessonProgrammingJs1 = await db.lessons.create({
        data: {
            id: 6,
            title: "Lição de Funções em JavaScript",
            quizId: quizProgrammingJs.id,
            order: 1,
        },
    });
    const lessonProgrammingJs2 = await db.lessons.create({
        data: {
            id: 7,
            title: "Lição de Arrays em JavaScript",
            quizId: quizProgrammingJs.id,
            order: 2,
        },
    });

    const lessonProgrammingJs3 = await db.lessons.create({
        data: {
            id: 8,
            title: "Lição de Objetos em JavaScript",
            quizId: quizProgrammingJs.id,
            order: 3,
        },
    });

    const lessonProgrammingPy = await db.lessons.create({
        data: {
            id: 9,
            title: "Lição de Estruturas de Dados em Python",
            quizId: quizProgrammingPy.id,
            order: 1,
        },
    });

    // Criação de desafios
    const challenge1 = await db.challenges.create({
        data: {
            id: 1,
            lessonId: lesson1.id,
            type: "SELECT",
            question: "Qual é a solução de x + 2 = 4?",
            order: 1,
        },
    });

    const challenge2 = await db.challenges.create({
        data: {
            id: 2,
            lessonId: lesson2.id,
            type: "SELECT",
            question: "Em que ano começou a Revolução Francesa?",
            order: 1,
        },
    });

    const challenge3 = await db.challenges.create({
        data: {
            id: 3,
            lessonId: lesson3.id,
            type: "SELECT",
            question: "Qual é a fórmula da segunda lei de Newton?",
            order: 1,
        },
    });

    const challenge4 = await db.challenges.create({
        data: {
            id: 4,
            lessonId: lesson4.id,
            type: "SELECT",
            question: "Qual é a maior placa tectônica?",
            order: 1,
        },
    });

    const challenge5 = await db.challenges.create({
        data: {
            id: 5,
            lessonId: lesson5.id,
            type: "SELECT",
            question: "Qual é a obra mais famosa de Homero?",
            order: 1,
        },
    });

    const challengeProgrammingJs1 = await db.challenges.create({
        data: {
            id: 6,
            lessonId: lessonProgrammingJs1.id,
            type: "SELECT",
            question: "O que é retornado por console.log(typeof 'hello')?",
            order: 1,
        },
    });

    const challengeProgrammingJs2 = await db.challenges.create({
        data: {
            id: 7,
            lessonId: lessonProgrammingJs1.id,
            type: "SELECT",
            question: "Qual é o valor de 2 + '2' em JavaScript?",
            order: 2,
        },
    });

    const challengeProgrammingJs3 = await db.challenges.create({
        data: {
            id: 8,
            lessonId: lessonProgrammingJs1.id,
            type: "SELECT",
            question: "Qual é a saída de console.log(1 == '1')?",
            order: 3,
        },
    });

    // Desafios para a lição de Arrays em JavaScript
    const challengeProgrammingJs4 = await db.challenges.create({
        data: {
            id: 9,
            lessonId: lessonProgrammingJs2.id,
            type: "SELECT",
            question:
                "Qual método adiciona um ou mais elementos ao final de um array?",
            order: 1,
        },
    });

    const challengeProgrammingJs5 = await db.challenges.create({
        data: {
            id: 10,
            lessonId: lessonProgrammingJs2.id,
            type: "SELECT",
            question: "Qual método remove o último elemento de um array?",
            order: 2,
        },
    });

    // Desafios para a lição de Objetos em JavaScript
    const challengeProgrammingJs6 = await db.challenges.create({
        data: {
            id: 11,
            lessonId: lessonProgrammingJs3.id,
            type: "SELECT",
            question:
                "Como você acessa o valor da propriedade 'nome' de um objeto 'pessoa'?",
            order: 1,
        },
    });

    const challengeProgrammingJs7 = await db.challenges.create({
        data: {
            id: 12,
            lessonId: lessonProgrammingJs3.id,
            type: "SELECT",
            question:
                "Como você adiciona uma nova propriedade 'idade' ao objeto 'pessoa'?",
            order: 2,
        },
    });

    const challengeProgrammingPy1 = await db.challenges.create({
        data: {
            id: 13,
            lessonId: lessonProgrammingPy.id,
            type: "SELECT",
            question: "O que print(type(42)) retorna?",
            order: 1,
        },
    });

    const challengeProgrammingPy2 = await db.challenges.create({
        data: {
            id: 14,
            lessonId: lessonProgrammingPy.id,
            type: "SELECT",
            question: "Qual é o resultado de len('Hello')?",
            order: 2,
        },
    });

    const challengeProgrammingPy3 = await db.challenges.create({
        data: {
            id: 15,
            lessonId: lessonProgrammingPy.id,
            type: "SELECT",
            question: "Qual é o valor de 3 * 'Hi'?",
            order: 3,
        },
    });

    // Criação de opções de desafios
    await db.challengeOption.createMany({
        data: [
            { challengeId: challenge1.id, text: "x = 1", correct: false },
            { challengeId: challenge1.id, text: "x = 2", correct: true },
            { challengeId: challenge1.id, text: "x = 3", correct: false },

            { challengeId: challenge2.id, text: "1789", correct: true },
            { challengeId: challenge2.id, text: "1776", correct: false },
            { challengeId: challenge2.id, text: "1804", correct: false },

            { challengeId: challenge3.id, text: "F = ma", correct: true },
            { challengeId: challenge3.id, text: "E = mc^2", correct: false },
            { challengeId: challenge3.id, text: "F = mv", correct: false },

            {
                challengeId: challenge4.id,
                text: "Placa do Pacífico",
                correct: true,
            },
            {
                challengeId: challenge4.id,
                text: "Placa de Nazca",
                correct: false,
            },
            {
                challengeId: challenge4.id,
                text: "Placa Africana",
                correct: false,
            },

            { challengeId: challenge5.id, text: "Ilíada", correct: true },
            { challengeId: challenge5.id, text: "Eneida", correct: false },
            {
                challengeId: challenge5.id,
                text: "Metamorfoses",
                correct: false,
            },

            // JavaScript Respostas para a lição de Funções em JavaScript
            {
                challengeId: challengeProgrammingJs1.id,
                text: "string",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs1.id,
                text: "object",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs1.id,
                text: "undefined",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs2.id,
                text: "22",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs2.id,
                text: "4",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs2.id,
                text: "undefined",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs3.id,
                text: "true",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs3.id,
                text: "false",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs3.id,
                text: "undefined",
                correct: false,
            },
            // Respostas para a lição de Arrays em JavaScript
            {
                challengeId: challengeProgrammingJs4.id,
                text: "push",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs4.id,
                text: "pop",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs4.id,
                text: "shift",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs5.id,
                text: "pop",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs5.id,
                text: "push",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs5.id,
                text: "unshift",
                correct: false,
            },

            // Respostas para a lição de Objetos em JavaScript
            {
                challengeId: challengeProgrammingJs6.id,
                text: "pessoa.nome",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs6.id,
                text: "pessoa['nome']",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs6.id,
                text: "pessoa->nome",
                correct: false,
            },
            {
                challengeId: challengeProgrammingJs7.id,
                text: "pessoa.idade = 30",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs7.id,
                text: "pessoa['idade'] = 30",
                correct: true,
            },
            {
                challengeId: challengeProgrammingJs7.id,
                text: "pessoa.add('idade', 30)",
                correct: false,
            },

            // Python
            {
                challengeId: challengeProgrammingPy1.id,
                text: "<class 'int'>",
                correct: true,
            },
            {
                challengeId: challengeProgrammingPy1.id,
                text: "<class 'float'>",
                correct: false,
            },
            {
                challengeId: challengeProgrammingPy1.id,
                text: "<class 'str'>",
                correct: false,
            },
            {
                challengeId: challengeProgrammingPy2.id,
                text: "5",
                correct: true,
            },
            {
                challengeId: challengeProgrammingPy2.id,
                text: "4",
                correct: false,
            },
            {
                challengeId: challengeProgrammingPy2.id,
                text: "6",
                correct: false,
            },
            {
                challengeId: challengeProgrammingPy3.id,
                text: "HiHiHi",
                correct: true,
            },
            {
                challengeId: challengeProgrammingPy3.id,
                text: "Hi3",
                correct: false,
            },
            {
                challengeId: challengeProgrammingPy3.id,
                text: "3Hi",
                correct: false,
            },
        ],
    });

    console.log("Seed data created successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
