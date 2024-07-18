import { useCurrentUser } from "@/hooks/use-current-user";
import { db } from "@/services/database";

export const getUserProgress = async () => {
  try {
    const user = await useCurrentUser();

    if (!user?.id) {
      return null;
    }

    const data = await db.userProgress.findFirst({
      where: { userId: user.id },
      include: {
        activeCourse: true,
      },
    });

    return data;
  } catch {
    return null;
  }
};