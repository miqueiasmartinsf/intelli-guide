import { UserRole } from '@prisma/client'

import { auth } from '@/services/auth'

export const useCurrentAdmin = async () => {
  try {
    const session = await auth()
    const user = session?.user

    return user?.role === UserRole.ADMIN
  } catch (error) {
    console.error('Erro ao verificar se o usuário é admin:', error)
    return false
  }
}
