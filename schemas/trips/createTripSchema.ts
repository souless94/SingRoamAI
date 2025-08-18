// lib/createTripSchema.ts
import { calculateTripLength } from "@/utils/tripHelper";
import { z } from "zod";

// Define schema
export const createTripSchema = z
  .object({
    title: z.string().min(1, "Trip title is required"),
    destination: z.string().min(1, "Destination is required"),
    startDate: z.string().min(1, "Start date is required"),
    endDate: z.string().min(1, "End date is required"),
    tripLength: z.string().min(1, "Trip length is required"), // as string
    people: z.string().min(1, "People is required"),          // as string
    budget: z.string().min(1, "Budget is required"),          // as string
    notes: z.string().optional(),
  })
  .refine((data) => !isNaN(Number(data.people)) && Number(data.people) > 0, {
    message: "People must be a positive number",
    path: ["people"],
  })
  .refine((data) => !isNaN(Number(data.budget)) && Number(data.budget) > 0, {
    message: "Budget must be a positive number",
    path: ["budget"],
  })
  .refine(
    (data) =>
      calculateTripLength(data.startDate, data.endDate) === Number(data.tripLength),
    {
      message: "Trip length does not match the selected dates",
      path: ["tripLength"],
    }
  )
  .refine(
    (data) => new Date(data.endDate) >= new Date(data.startDate),
    {
      message: "End date must be after start date",
      path: ["endDate"],
    }
  );

export const aiTripOutputSchema = z.object({
  imagePrompt: z.string(),
  days: z.array(
    z.object({
      title: z.string(),
      dayIndex: z.number(),
      date: z.string(),
      morningTitle: z.string(),
      morning: z.string(),
      afternoonTitle: z.string(),
      afternoon: z.string(),
      eveningTitle: z.string(),
      evening: z.string(),
    })
  ),
  weatherInfo: z.object({
    season: z.string(),
    temperatureInfo: z.string(),
    description: z.string(),
    itemsToPack: z.string().optional(),
    considerations: z.string().optional(),
  }),
});
