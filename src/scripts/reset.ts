import { db } from '@/services/database'

const main = async () => {
  try {
    console.log('Reseting the database')

    // Deletar dados de todas as tabelas
    await db.questionOption.deleteMany({})
    await db.question.deleteMany({})
    await db.category.deleteMany({})
    await db.quiz.deleteMany({})
    await db.userProgress.deleteMany({})
  } catch (error) {
    console.error(error)
    throw new Error('Failed to reset database')
  }
}

main()
