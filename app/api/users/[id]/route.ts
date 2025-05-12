import { ensureSuperTokensInit } from "@/config/backend";
import logger from "@/lib/logger";
import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { withSession } from "supertokens-node/nextjs";

ensureSuperTokensInit();

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  return withSession(req, async (err, session) => {
    if (err) {
      logger.error(err);
      return NextResponse.json(err, { status: 500 });
    }
    if (!session) {
      return new NextResponse("Authentication required", { status: 401 });
    }

    const { id } = await context.params;

    if (!id) {
      return new NextResponse(JSON.stringify({ error: "Missing user ID" }), {
        status: 400,
      });
    }

    const user = await prisma.appUser.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        imageUrl: true,
      },
    });

    if (!user) {
      return new NextResponse(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return NextResponse.json(user);
  });
}
