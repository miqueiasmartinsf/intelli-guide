import { UserRole } from '@prisma/client'
import { NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.quizzes.findUnique({
    where: { id: Number(params.unitId) },
  })

  return NextResponse.json(data)
}

export const PUT = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const body = await req.json()

  const data = await db.quizzes.update({
    where: { id: Number(params.unitId) },
    data: body,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  req: Request,
  { params }: { params: { unitId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.quizzes.delete({
    where: { id: Number(params.unitId) },
  })

  return NextResponse.json(data)
}
