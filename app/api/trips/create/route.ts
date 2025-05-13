import logger from "@/lib/logger";
import { createTripSchema } from "@/schemas/trips/createTripSchema";
import { prisma } from "@/utils/db";
import { generateTripPlan } from "@/utils/genai";
import { getUnSplashImage } from "@/utils/unsplash";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const parsed = createTripSchema.safeParse(formData);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Generate AI trip plan
    const aiResult = await generateTripPlan(data);
    logger.info(aiResult);

    const weatherInfo = await prisma.weatherInfo.create({
      data: {
        season: aiResult.weatherInfo.season,
        temperatureInfo: aiResult.weatherInfo.temperatureInfo,
        description: aiResult.weatherInfo.description,
        itemsToPack: aiResult.weatherInfo.itemsToPack,
        considerations: aiResult.weatherInfo.considerations,
      },
    });

    const imageUrl = await getUnSplashImage(aiResult.imagePrompt);
    logger.info("Image Url : " + imageUrl);

    const trip = await prisma.trip.create({
      data: {
        title: data.title,
        location: data.destination,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        budget: data.budget,
        weatherInfoid: weatherInfo.id,
        daysCount: aiResult.days.length,
        imageUrl,
        isDraft: true,
      },
    });

    const daysData = aiResult.days.map((day, index) => ({
      title: day.title,
      tripId: trip.id,
      dayIndex: index + 1,
      date: new Date(day.date),
      morningTitle: day.morningTitle,
      morning: day.morning,
      afternoonTitle: day.afternoonTitle,
      afternoon: day.afternoon,
      eveningTitle: day.eveningTitle,
      evening: day.evening,
    }));

    await prisma.tripDay.createMany({ data: daysData });

    const fullTrip = await prisma.trip.findUniqueOrThrow({
      where: { id: trip.id },
      include: { weatherInfo: true, days: true },
    });

    return NextResponse.json({ success: true, data: fullTrip });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { success: false, error: "unknown Error" },
      { status: 500 }
    );
  }
}
