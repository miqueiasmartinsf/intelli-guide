import { revalidatePath } from 'next/cache'

import { getUserProgress, getUserSubscription } from '@/data'
import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const upsertChallengeProgress = async (challengeId: number) => {
  const session = await auth()
  const user = session?.user
  const userId = user?.id
  if (!userId) {
    throw new Error('Unauthorized')
  }

  const currentUserProgress = await getUserProgress()
  const userSubscription = await getUserSubscription()

  if (!currentUserProgress) {
    throw new Error('User progress not found')
  }

  const challenge = await db.challenges.findUnique({
    where: { id: challengeId },
  })

  if (!challenge) {
    throw new Error('Challenge not found')
  }

  const lessonId = challenge.lessonId

  const existingChallengeProgress = await db.challengeProgress.findFirst({
    where: {
      userId,
      challengeId,
    },
  })

  const isPractice = !!existingChallengeProgress

  if (
    currentUserProgress.hearts === 0 &&
    !isPractice &&
    !userSubscription?.isActive
  ) {
    return { error: 'hearts' }
  }

  if (isPractice) {
    await db.challengeProgress.update({
      where: { id: existingChallengeProgress.id },
      data: { completed: true },
    })

    await db.userProgress.update({
      where: { userId },
      data: {
        hearts: Math.min(currentUserProgress.hearts + 1, 5),
        points: currentUserProgress.points + 10,
      },
    })

    revalidatePath('/learn')
    revalidatePath('/lesson')
    revalidatePath('/quests')
    revalidatePath('/leaderboard')
    revalidatePath(`/lesson/${lessonId}`)

    return
  }

  await db.challengeProgress.create({
    data: {
      challengeId,
      userId,
      completed: true,
    },
  })

  await db.userProgress.update({
    where: { userId },
    data: {
      points: currentUserProgress.points + 10,
    },
  })

  revalidatePath('/learn')
  revalidatePath('/lesson')
  revalidatePath('/quests')
  revalidatePath('/leaderboard')
  revalidatePath(`/lesson/${lessonId}`)
}
