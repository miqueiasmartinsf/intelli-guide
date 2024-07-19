import { db } from "@/services/database";

async function main() {
    console.log("Seeding database...");

    // Limpar os dados existentes
    await db.challengeOption.deleteMany({});
    await db.challenge.deleteMany({});
    await db.lesson.deleteMany({});
    await db.unit.deleteMany({});
    await db.courses.deleteMany({});
    await db.userProgress.deleteMany({});
    await db.userSubscription.deleteMany({});

    // Inserir cursos
    await db.courses.createMany({
        data: [
            { id: 1, title: "Spanish", imageSrc: "/es.svg" },
            { id: 2, title: "Italian", imageSrc: "/it.svg" },
            { id: 3, title: "French", imageSrc: "/fr.svg" },
            { id: 4, title: "Croatian", imageSrc: "/hr.svg" },
        ],
    });

    // Inserir unidades
    await db.unit.create({
        data: {
            id: 1,
            courseId: 1, // Spanish
            title: "unit 1",
            description: "Learn the fundamentals of spanish",
            order: 1,
        },
    });

    // Inserir lições
    await db.lesson.createMany({
        data: [
            { id: 1, unitId: 1, order: 1, title: "Nouns" },
            { id: 2, unitId: 1, order: 2, title: "Verbs" },
            { id: 3, unitId: 1, order: 3, title: "Verbs" },
            { id: 4, unitId: 1, order: 4, title: "Verbs" },
            { id: 5, unitId: 1, order: 5, title: "Verbs" },
        ],
    });

    // Inserir desafios
    await db.challenge.createMany({
        data: [
            { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'Which one of these is the "the man"?' },
            { id: 2, lessonId: 1, type: "ASSIST", order: 2, question: '"the man"' },
            { id: 3, lessonId: 1, type: "SELECT", order: 3, question: 'Which one of these is the "the Robot"?' },
            { id: 4, lessonId: 2, type: "SELECT", order: 1, question: 'Which one of these is the "the man"?' },
            { id: 5, lessonId: 2, type: "ASSIST", order: 2, question: '"the man"' },
            { id: 6, lessonId: 2, type: "SELECT", order: 3, question: 'Which one of these is the "the Robot"?' },
        ],
    });

    // Inserir opções de desafios
    await db.challengeOption.createMany({
        data: [
            { challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "/es_man.mp3" },
            { challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
            { challengeId: 1, imageSrc: "/robot.svg", correct: false, text: "el robot", audioSrc: "/es_robot.mp3" },
            { challengeId: 2, correct: true, text: "el hombre", audioSrc: "/es_man.mp3" },
            { challengeId: 2, correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
            { challengeId: 2, correct: false, text: "el robot", audioSrc: "/es_robot.mp3" },
            { challengeId: 3, imageSrc: "/man.svg", correct: false, text: "el hombre", audioSrc: "/es_man.mp3" },
            { challengeId: 3, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
            { challengeId: 3, imageSrc: "/robot.svg", correct: true, text: "el robot", audioSrc: "/es_robot.mp3" },
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