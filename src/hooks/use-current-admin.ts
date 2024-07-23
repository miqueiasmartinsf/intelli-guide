import { UserRole } from '@prisma/client'

import { auth } from '@/services/auth'

export const useCurrentAdmin = async () => {
  try {
    const session = await auth()
    const user = session?.user

    console.log('useCurrentAdmin:', user)
    console.log('useCurrentAdmin is true:', user?.role === UserRole.ADMIN)
    return user?.role === UserRole.ADMIN
  } catch (error) {
    console.error('Erro ao verificar se o usuário é admin:', error)
    return false
  }
}
