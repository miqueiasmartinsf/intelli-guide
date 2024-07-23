import { ChallengeOption } from '@prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

import { useCurrentAdmin } from '@/hooks/use-current-admin'
import { db } from '@/services/database'

export const GET = async () => {
  if (!useCurrentAdmin())
    return new NextResponse('Unauthorized.', { status: 401 })

  const data = await db.challengeOption.findMany()

  return NextResponse.json(data)
}

export const POST = async (req: NextRequest) => {
  if (!useCurrentAdmin())
    return new NextResponse('Unauthorized.', { status: 401 })

  const body = (await req.json()) as ChallengeOption

  const data = await db.challengeOption.create({
    data: body,
  })

  return NextResponse.json(data)
}
