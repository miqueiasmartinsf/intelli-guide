import { Challenges, UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

import { auth } from "@/services/auth";
import { db } from "@/services/database";

export const GET = async (
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    const session = await auth();
    const user = session?.user;

    const isAdmin = user?.role === UserRole.ADMIN;
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.challenges.findUnique({
        where: { id: Number(params.challengeId) },
    });

    return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    const session = await auth();
    const user = session?.user;

    const isAdmin = user?.role === UserRole.ADMIN;
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = (await req.json()) as Challenges;

    const data = await db.challenges.update({
        where: { id: Number(params.challengeId) },
        data: body,
    });

    return NextResponse.json(data);
};

export const DELETE = async (
    req: Request,
    { params }: { params: { challengeId: number } },
) => {
    const session = await auth();
    const user = session?.user;

    const isAdmin = user?.role === UserRole.ADMIN;
    if (!isAdmin) {
        return new NextResponse("Unauthorized", { status: 403 });
    }

    const data = await db.challenges.delete({
        where: { id: Number(params.challengeId) },
    });

    return NextResponse.json(data);
};
