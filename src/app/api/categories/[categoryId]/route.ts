import { UserRole } from '@prisma/client'
import { NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async (
  req: Request,
  { params }: { params: { categoryId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN

  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await db.categories.findUnique({
    where: { id: Number(params.categoryId) },
  })

  return NextResponse.json(data)
}

export const PUT = async (
  req: Request,
  { params }: { params: { categoryId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await req.json()

  const data = await db.categories.update({
    where: { id: Number(params.categoryId) },
    data: body,
  })

  return NextResponse.json(data)
}

export const DELETE = async (
  req: Request,
  { params }: { params: { categoryId: number } },
) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.categories.delete({
    where: { id: Number(params.categoryId) },
  })

  return NextResponse.json(data)
}
