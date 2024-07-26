/* eslint-disable no-void */
import { db } from '@/services/database'

const main = async () => {
  try {
    console.log('Seeding database')

    // Primeiro, deletar todos os dados existentes
    await db.userProgress.deleteMany({})
    await db.challengeOption.deleteMany({})
    await db.challenges.deleteMany({})
    await db.lessons.deleteMany({})
    await db.quizzes.deleteMany({})
    await db.categories.deleteMany({})
    await db.userSubscription.deleteMany({})

    // Insere as categorias
    const category = await db.categories.create({
      data: {
        title: 'Spanish',
        imageSrc: '/spanish.svg',
      },
    })

    // Insere as unidades para o curso criado
    await db.quizzes.createMany({
      data: [
        {
          categoryId: category.id,
          title: 'Unit 1',
          description: `Learn the basics of ${category.title}`,
          order: 1,
        },
        {
          categoryId: category.id,
          title: 'Unit 2',
          description: `Learn intermediate ${category.title}`,
          order: 2,
        },
      ],
    })

    // Recupera as unidades inseridas
    const quizzes = await db.quizzes.findMany({
      where: {
        categoryId: category.id,
      },
    })

    // Para cada unidade, insere as lições
    for (const unit of quizzes) {
      await db.lessons.createMany({
        data: [
          { unitId: unit.id, title: 'Nouns', order: 1 },
          { unitId: unit.id, title: 'Verbs', order: 2 },
          { unitId: unit.id, title: 'Adjectives', order: 3 },
          { unitId: unit.id, title: 'Phrases', order: 4 },
          { unitId: unit.id, title: 'Sentences', order: 5 },
        ],
      })

      // Recupera as lições inseridas para a unidade atual
      const lessons = await db.lessons.findMany({
        where: {
          unitId: unit.id,
        },
      })

      // Para cada lição, insere os desafios
      for (const lesson of lessons) {
        await db.challenges.createMany({
          data: [
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the man"?',
              order: 1,
            },
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the woman"?',
              order: 2,
            },
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the boy"?',
              order: 3,
            },
            {
              lessonId: lesson.id,
              type: 'ASSIST',
              question: '"the man"',
              order: 4,
            },
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the zombie"?',
              order: 5,
            },
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the robot"?',
              order: 6,
            },
            {
              lessonId: lesson.id,
              type: 'SELECT',
              question: 'Which one of these is "the girl"?',
              order: 7,
            },
            {
              lessonId: lesson.id,
              type: 'ASSIST',
              question: '"the zombie"',
              order: 8,
            },
          ],
        })

        // Recupera as lições inseridas para a unidade atual
        const challenges = await db.challenges.findMany({
          where: {
            lessonId: lesson.id,
          },
        })

        for (const challenge of challenges) {
          let optionsData: any = []
          if (challenge.order === 1) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el hombre',
                imageSrc: '/man.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'la mujer',
                imageSrc: '/woman.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el chico',
                imageSrc: '/boy.svg',
              },
            ]
          } else if (challenge.order === 2) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: true,
                text: 'la mujer',
                imageSrc: '/woman.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el chico',
                imageSrc: '/boy.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el hombre',
                imageSrc: '/man.svg',
              },
            ]
          } else if (challenge.order === 3) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: false,
                text: 'la mujer',
                imageSrc: '/woman.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el hombre',
                imageSrc: '/man.svg',
              },
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el chico',
                imageSrc: '/boy.svg',
              },
            ]
          } else if (challenge.order === 4) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: false,
                text: 'la mujer',
              },
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el hombre',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el chico',
              },
            ]
          } else if (challenge.order === 5) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el hombre',
                imageSrc: '/man.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'la mujer',
                imageSrc: '/woman.svg',
              },
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el zombie',
                imageSrc: '/zombie.svg',
              },
            ]
          } else if (challenge.order === 6) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el robot',
                imageSrc: '/robot.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el zombie',
                imageSrc: '/zombie.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el chico',
                imageSrc: '/boy.svg',
              },
            ]
          } else if (challenge.order === 7) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: true,
                text: 'la nina',
                imageSrc: '/girl.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el zombie',
                imageSrc: '/zombie.svg',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el hombre',
                imageSrc: '/man.svg',
              },
            ]
          } else if (challenge.order === 8) {
            optionsData = [
              {
                challengeId: challenge.id,
                correct: false,
                text: 'la mujer',
              },
              {
                challengeId: challenge.id,
                correct: true,
                text: 'el zombie',
              },
              {
                challengeId: challenge.id,
                correct: false,
                text: 'el chico',
              },
            ]
          }

          // Insere as opções de desafio para o desafio atual
          if (optionsData.length > 0) {
            await db.challengeOption.createMany({
              data: optionsData,
            })
          }
        }
      }
    }

    console.log('Database seeded successfully')
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

void main()
