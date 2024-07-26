import { db } from "@/services/database";

async function main() {
    console.log("Seeding database...");

    // Limpar os dados existentes
    await db.categories.deleteMany({});
    await db.challengeOption.deleteMany({});
    await db.challenges.deleteMany({});
    await db.lessons.deleteMany({});
    await db.userProgress.deleteMany({});
    await db.userSubscription.deleteMany({});
    await db.quizzes.deleteMany({});

    // Criação de categorias
    const category1 = await db.categories.create({
        data: {
            title: "Matemática",
            imageSrc: "/images/math.png",
        },
    });

    const category2 = await db.categories.create({
        data: {
            title: "História",
            imageSrc: "/images/history.png",
        },
    });

    // Criação de quizzes
    const quiz1 = await db.quizzes.create({
        data: {
            title: "Quiz de Álgebra",
            description: "Teste seus conhecimentos em álgebra.",
            categoryId: category1.id,
            order: 1,
        },
    });

    const quiz2 = await db.quizzes.create({
        data: {
            title: "Quiz de História Geral",
            description: "Teste seus conhecimentos em história geral.",
            categoryId: category2.id,
            order: 1,
        },
    });

    // Criação de lições
    const lesson1 = await db.lessons.create({
        data: {
            title: "Lição de Equações",
            quizId: quiz1.id,
            order: 1,
        },
    });

    const lesson2 = await db.lessons.create({
        data: {
            title: "Lição de Revoluções",
            quizId: quiz2.id,
            order: 1,
        },
    });

    // Criação de desafios
    const challenge1 = await db.challenges.create({
        data: {
            lessonId: lesson1.id,
            type: "SELECT",
            question: "Qual é a solução de x + 2 = 4?",
            order: 1,
        },
    });

    const challenge2 = await db.challenges.create({
        data: {
            lessonId: lesson2.id,
            type: "SELECT",
            question: "Em que ano começou a Revolução Francesa?",
            order: 1,
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
