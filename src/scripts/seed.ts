import { db } from "@/services/database";

async function main() {
    console.log("Seeding database...");

    // Limpar os dados existentes
    await db.challengeOption.deleteMany({});
    await db.challenges.deleteMany({});
    await db.lessons.deleteMany({});
    await db.categories.deleteMany({});
    await db.userProgress.deleteMany({});
    await db.userSubscription.deleteMany({});
    await db.quizzes.deleteMany({});

    // Inserir cursos
    await db.categories.createMany({
        data: [
            { id: 1, title: "Spanish", imageSrc: "_next/static/media/es.svg" },
            { id: 2, title: "Italian", imageSrc: "_next/static/media/it.svg" },
            { id: 3, title: "French", imageSrc: "_next/static/media/fr.svg" },
            { id: 4, title: "Croatian", imageSrc: "_next/static/media/hr.svg" },
        ],
    });

    // Inserir unidades
    // await db.units.create({
    //     data: {
    //         id: 1,
    //         categorieId: 1,
    //         title: "unit 1",
    //         description: "Learn the fundamentals of spanish",
    //         order: 1,
    //     },
    // });

    await db.quizzes.createMany({
        data: [
            {
                categoryId: 1,
                description: "basic quiz",
                order: 1,
                title: "Football Quiz",
            },
            {
                categoryId: 1,
                description: "basic quiz",
                order: 2,
                title: "Football Quiz",
            },
            {
                categoryId: 1,
                description: "basic quiz",
                order: 3,
                title: "Football Quiz",
            },
            {
                categoryId: 1,
                description: "basic quiz",
                order: 4,
                title: "Football Quiz",
            },
        ],
    });

    // Inserir lições
    await db.lessons.createMany({
        data: [
            { id: 1, quizId: 1, order: 1, title: "Nouns" },
            { id: 2, quizId: 1, order: 2, title: "Verbs" },
            { id: 3, quizId: 1, order: 3, title: "Verbs" },
            { id: 4, quizId: 1, order: 4, title: "Verbs" },
            { id: 5, quizId: 1, order: 5, title: "Verbs" },
        ],
    });

    // Inserir desafios
    await db.challenges.createMany({
        data: [
            {
                id: 1,
                lessonId: 1,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"?',
            },
            {
                id: 2,
                lessonId: 1,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 3,
                lessonId: 1,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the Robot"?',
            },
            {
                id: 4,
                lessonId: 2,
                type: "SELECT",
                order: 1,
                question: 'Which one of these is the "the man"?',
            },
            {
                id: 5,
                lessonId: 2,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },
            {
                id: 6,
                lessonId: 2,
                type: "SELECT",
                order: 3,
                question: 'Which one of these is the "the Robot"?',
            },
        ],
    });

    // Inserir opções de desafios
    await db.challengeOption.createMany({
        data: [
            {
                challengeId: 1,
                imageSrc: "/man.svg",
                correct: true,
                text: "el hombre",
            },
            {
                challengeId: 1,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
            },
            {
                challengeId: 1,
                imageSrc: "/robot.svg",
                correct: false,
                text: "el robot",
            },
            {
                challengeId: 2,
                correct: true,
                text: "el hombre",
            },
            {
                challengeId: 2,
                correct: false,
                text: "la mujer",
            },
            {
                challengeId: 2,
                correct: false,
                text: "el robot",
            },
            {
                challengeId: 3,
                imageSrc: "/man.svg",
                correct: false,
                text: "el hombre",
            },
            {
                challengeId: 3,
                imageSrc: "/woman.svg",
                correct: false,
                text: "la mujer",
            },
            {
                challengeId: 3,
                imageSrc: "/robot.svg",
                correct: true,
                text: "el robot",
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
