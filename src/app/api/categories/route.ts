import { UserRole } from '@prisma/client'
import { NextResponse } from 'next/server'

import { auth } from '@/services/auth'
import { db } from '@/services/database'

export const GET = async () => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await db.category.findMany()
  return NextResponse.json(data)
}

export const POST = async (req: Request) => {
  const session = await auth()
  const user = session?.user

  const isAdmin = user?.role === UserRole.ADMIN
  if (!isAdmin) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await req.json()
  const data = await db.category.create({
    data: body,
  })

  return NextResponse.json(data)
}
