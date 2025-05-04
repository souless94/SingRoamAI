// lib/createTripSchema.ts
import { z } from 'zod';

// Define schema
export const createTripSchema = z.object({
  title: z.string().min(1, "Trip title is required"),
  destination: z.string().min(1, "Destination is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  tripLength: z.coerce.number().min(1, "Trip length is required"),
  budget: z.coerce.number().gt(0),
  activities: z.string().optional(),
});

