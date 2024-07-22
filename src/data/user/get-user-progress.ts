import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const getUserProgress = async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    if (!userId) {
      return null
    }

    const data = await db.userProgress.findFirst({
      where: { userId },
      include: {
        activeCourse: true,
      },
    })

    return data
  } catch {
    return null
  }
}
