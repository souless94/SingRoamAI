// app/api/trips/delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/utils/db";
import logger from "@/lib/logger";

export async function DELETE(req: NextRequest) {
  try {
    const { tripId } = await req.json();

    if (!tripId || typeof tripId !== "string") {
      return NextResponse.json({ success: false, error: "Invalid trip ID" }, { status: 400 });
    }

    await prisma.trip.delete({
      where: { id: tripId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    logger.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
