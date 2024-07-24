'use server'
import { cache } from 'react'

import { auth } from '@/services/auth'
import { db } from '@/services/database'
import { DAY_IN_MS } from '@/utils/constants'

export const getUserSubscription = cache(async () => {
  try {
    const session = await auth()
    const user = session?.user
    const userId = user?.id

    if (!userId) return null

    const data = await db.userSubscription.findFirst({
      where: { userId },
    })

    if (!data) return null

    const isActive = data.stripePriceId && new Date(data.stripeCurrentPeriodEnd).getTime() + DAY_IN_MS > Date.now();

    return {
      ...data,
      isActive: !!isActive,
    };
  } catch {
    return null;
  }
})
