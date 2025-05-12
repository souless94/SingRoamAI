// lib/createTripSchema.ts
import { z } from 'zod';

// Define schema
export const createTripSchema = z.object({
  title: z.string().min(1, "Trip title is required"),
  destination: z.string().min(1, "Destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  tripLength: z.coerce.number().min(1, "Trip length is required"),
  people: z.coerce.number().gt(0),
  budget: z.coerce.number().gt(0),
  activities: z.string().optional(),
});

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

