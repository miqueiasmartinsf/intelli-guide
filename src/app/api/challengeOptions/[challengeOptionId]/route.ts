import { ChallengeOption, UserRole } from '@prisma/client'
import { type NextRequest, NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async (
  _req: NextRequest,
  { params }: { params: { challengeOptionId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) return new NextResponse('Unauthorized.', { status: 401 })

  const data = await db.challengeOption.findUnique({
    where: { id: Number(params.challengeOptionId) },
  })

  return NextResponse.json(data)
}

export const PUT = async (
  req: NextRequest,
  { params }: { params: { challengeOptionId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) return new NextResponse('Unauthorized.', { status: 401 })

  const body = (await req.json()) as ChallengeOption
  const data = await db.challengeOption.update({
    where: { id: Number(params.challengeOptionId) },
    data: body,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { challengeOptionId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) return new NextResponse('Unauthorized.', { status: 401 })

  const data = await db.challengeOption.delete({
    where: { id: Number(params.challengeOptionId) },
  })
  return NextResponse.json(data)
}
