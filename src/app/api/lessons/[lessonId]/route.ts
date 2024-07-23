import { UserRole } from '@prisma/client'
import { NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.lessons.findUnique({
    where: { id: Number(params.lessonId) },
  })

  return NextResponse.json(data)
}

export const PUT = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const body = await req.json()

  const data = await db.lessons.update({
    where: { id: Number(params.lessonId) },
    data: body,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  req: Request,
  { params }: { params: { lessonId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.lessons.delete({
    where: { id: Number(params.lessonId) },
  })
  return NextResponse.json(data)
}
