import { db } from "@/services/database";

async function main() {
    console.log("Seeding database...");

    // Limpar os dados existentes
    await db.questionOption.deleteMany({});
    await db.question.deleteMany({});
    await db.category.deleteMany({});
    await db.quiz.deleteMany({});
    await db.userProgress.deleteMany({});

    // Inserir categorias
    await db.category.createMany({
        data: [
            { id: 1, title: "Futebol", imageSrc: "_next/static/media/es.svg" },
            { id: 2, title: "Cinema", imageSrc: "_next/static/media/it.svg" },
            { id: 3, title: "História", imageSrc: "_next/static/media/fr.svg" },
            { id: 4, title: "Séries", imageSrc: "_next/static/media/hr.svg" },
        ],
    });

    // Inserir quizz
    await db.quiz.create({
        data: {
            id: 1,
            categoryId: 1,
            title: "unit 1",
            description: "Aprenda os fundamentos do futebol",
            order: 1,
        },
    });

    // Inserir lições
    await db.quiz.createMany({
        data: [
            {
                id: 1,
                categoryId: 1,
                order: 1,
                title: "Nouns",
                description: "Aprenda os fundamentos do futebol",
            },
            {
                id: 2,
                categoryId: 1,
                order: 2,
                title: "Verbs",
                description: "Aprenda os fundamentos do futebol",
            },
            {
                id: 3,
                categoryId: 1,
                order: 3,
                title: "Verbs",
                description: "Aprenda os fundamentos do futebol",
            },
            {
                id: 4,
                categoryId: 1,
                order: 4,
                title: "Verbs",
                description: "Aprenda os fundamentos do futebol",
            },
            {
                id: 5,
                categoryId: 1,
                order: 5,
                title: "Verbs",
                description: "Aprenda os fundamentos do futebol",
            },
        ],
    });

    // Inserir desafios
    await db.question.createMany({
        data: [
            {
                id: 1,
                quizId: 1,
                order: 1,
                question:
                    "Qual jogador ganhou o maior número de Copas do Mundo?",
            },
            {
                id: 2,
                quizId: 1,
                order: 2,
                question:
                    "Qual foi o primeiro país a sediar uma Copa do Mundo da FIFA?",
            },
            {
                id: 3,
                quizId: 1,
                order: 3,
                question:
                    "Qual jogador ganhou o maior número de Copas do Mundo?",
            },
            {
                id: 4,
                quizId: 2,
                order: 1,
                question:
                    "Em que ano foi fundada a FIFA (Federação Internacional de Futebol)?",
            },
            {
                id: 5,
                quizId: 2,
                order: 2,
                question:
                    "Qual clube de futebol tem mais títulos da Liga dos Campeões da UEFA?",
            },
            {
                id: 6,
                quizId: 2,
                order: 3,
                question:
                    "Qual clube de futebol tem mais títulos da Liga dos Campeões da UEFA?",
            },
        ],
    });

    // Inserir opções de desafios
    await db.questionOption.createMany({
        data: [
            {
                questionId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "Charles Miller",
            },
            {
                questionId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "Ebenezer Cobb Morley",
            },
            {
                questionId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "Jules Rimet",
            },
            {
                questionId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "Pelé",
            },
            {
                questionId: 2,
                correct: true,
                text: " Brasil",
            },
            {
                questionId: 2,
                correct: false,
                text: "Uruguai",
            },
            {
                questionId: 2,
                correct: false,
                text: "Itália",
            },
            {
                questionId: 2,
                correct: false,
                text: "Inglaterra",
            },
            {
                questionId: 3,
                imageSrc: "/man.svg",
                correct: false,
                text: "1900",
            },
            {
                questionId: 3,
                imageSrc: "/woman.svg",
                correct: false,
                text: "1904",
            },
            {
                questionId: 3,
                imageSrc: "/robot.svg",
                correct: true,
                text: "1920",
            },
            {
                questionId: 3,
                imageSrc: "/robot.svg",
                correct: true,
                text: "1930",
            },
        ],
    });

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
