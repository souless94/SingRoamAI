"use server";

import { createTripSchema } from "@/schemas/trips/createTripSchema";
import prisma from "@/utils/db";
import { generateTripPlan } from "@/utils/genai";
import { z } from "zod";

type CreateTripValues = z.infer<typeof createTripSchema>;

export async function createTrip(formData: CreateTripValues) {
  const parsed = createTripSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Invalid input");
  }

  // ✅ Generate AI trip plan
  const aiResult = await generateTripPlan(formData);

  console.log("Generated Trip:", aiResult);

  // Save the weatherInfo to the database
  const weatherInfo = await prisma.weatherInfo.create({
    data: {
      season: aiResult.weatherInfo.season,
      temperatureInfo: aiResult.weatherInfo.temperatureInfo,
      description: aiResult.weatherInfo.description,
      itemsToPack: aiResult.weatherInfo.itemsToPack,
      considerations: aiResult.weatherInfo.considerations,
    },
  });

  // Save the trip to the database
  const trip = await prisma.trip.create({
    data: {
      title: formData.title,
      location: formData.destination,
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      budget: formData.budget,
      weatherInfoid: weatherInfo.id,
      daysCount: aiResult.days.length,
      imageUrl: aiResult.imagePrompt, // You can generate an actual image URL if needed
      isDraft: true, // Set as true if it's a draft
    },
  });

  // Save the days (itinerary) to the database
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

  // Create all days in one go (you could also loop, but batch inserts are more efficient)
  await prisma.tripDay.createMany({
    data: daysData,
  });

  const fullTrip = await prisma.trip.findUniqueOrThrow({
    where: { id: trip.id },
    include: {
      weatherInfo: true,
      days: true,
    },
  });

  return {
    success: true,
    data: fullTrip, // Optionally return the created trip data with ID
  };
}
