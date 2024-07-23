import { UserRole } from '@prisma/client'
import { NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN

  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await db.courses.findUnique({
    where: { id: Number(params.courseId) },
  })

  return NextResponse.json(data)
}

export const PUT = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await req.json()

  const data = await db.courses.update({
    where: { id: Number(params.courseId) },
    data: body,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  req: Request,
  { params }: { params: { courseId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.courses.delete({
    where: { id: Number(params.courseId) },
  })

  return NextResponse.json(data)
}
