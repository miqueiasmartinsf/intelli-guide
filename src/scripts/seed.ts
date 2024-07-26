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
            title: "Matemática",
            imageSrc: "/images/math.png",
            description:
                "Mergulhe no mundo dos números e resolva desafios intrigantes com nossa categoria de Matemática.",
        },
    });

    const category2 = await db.categories.create({
        data: {
            title: "História",
            imageSrc: "/images/history.png",
            description:
                "Explore os eventos mais fascinantes do passado e teste seu conhecimento na nossa categoria de História.",
        },
    });

    const category3 = await db.categories.create({
        data: {
            title: "Ciência",
            imageSrc: "/images/science.png",
            description:
                "Descubra os mistérios do universo e desafie sua mente com nossa categoria de Ciência.",
        },
    });

    const category4 = await db.categories.create({
        data: {
            title: "Geografia",
            imageSrc: "/images/geography.png",
            description:
                "Aventure-se pelos continentes e mares enquanto testa seus conhecimentos em Geografia.",
        },
    });

    const category5 = await db.categories.create({
        data: {
            title: "Literatura",
            imageSrc: "/images/literature.png",
            description:
                "Viaje através dos clássicos literários e prove que você é um verdadeiro conhecedor na nossa categoria de Literatura.",
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

    const quiz3 = await db.quizzes.create({
        data: {
            title: "Quiz de Física",
            description: "Teste seus conhecimentos em física.",
            categoryId: category3.id,
            order: 1,
        },
    });

    const quiz4 = await db.quizzes.create({
        data: {
            title: "Quiz de Geografia Física",
            description: "Teste seus conhecimentos em geografia física.",
            categoryId: category4.id,
            order: 1,
        },
    });

    const quiz5 = await db.quizzes.create({
        data: {
            title: "Quiz de Literatura Clássica",
            description: "Teste seus conhecimentos em literatura clássica.",
            categoryId: category5.id,
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

    const lesson3 = await db.lessons.create({
        data: {
            title: "Lição de Leis da Física",
            quizId: quiz3.id,
            order: 1,
        },
    });

    const lesson4 = await db.lessons.create({
        data: {
            title: "Lição de Formação dos Continentes",
            quizId: quiz4.id,
            order: 1,
        },
    });

    const lesson5 = await db.lessons.create({
        data: {
            title: "Lição sobre Homero",
            quizId: quiz5.id,
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

    const challenge3 = await db.challenges.create({
        data: {
            lessonId: lesson3.id,
            type: "SELECT",
            question: "Qual é a fórmula da segunda lei de Newton?",
            order: 1,
        },
    });

    const challenge4 = await db.challenges.create({
        data: {
            lessonId: lesson4.id,
            type: "SELECT",
            question: "Qual é a maior placa tectônica?",
            order: 1,
        },
    });

    const challenge5 = await db.challenges.create({
        data: {
            lessonId: lesson5.id,
            type: "SELECT",
            question: "Qual é a obra mais famosa de Homero?",
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
