import prisma from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, context: { params: { id: string } }) {
const { id } = await context.params;

  const fullTrip = await prisma.trip.findUniqueOrThrow({
    where: { id: id },
    include: {
      weatherInfo: true,
      days: true,
    },
  });

  return NextResponse.json(fullTrip);
}
