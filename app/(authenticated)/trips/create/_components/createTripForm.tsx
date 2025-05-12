"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { createTripSchema } from "@/schemas/trips/createTripSchema";
import { Trip, TripDay, WeatherInfo } from "@/lib/generated/prisma/client";
import { createTrip } from "@/actions/tripsActions";
import { useState } from "react";
import { toast } from "sonner";

type TripWithInfo= Trip & {
    days: TripDay[];
    weatherInfo: WeatherInfo;
  };

type CreateTripFormProps = {
  onTripCreated: (trip: TripWithInfo) => void;
};

type CreateTripValues = z.infer<typeof createTripSchema>;

export function CreateTripForm({onTripCreated}: CreateTripFormProps) {
  const router = useRouter();
  const form = useForm<CreateTripValues>({
    resolver: zodResolver(createTripSchema),
    defaultValues: {
      title: "",
      destination: "",
      startDate: "",
      endDate: "",
      tripLength: 0,
      people: 1,
      budget: 0,
      activities: "",
    },
  });

  const onSubmit = async (data: CreateTripValues) => {
    // You can replace this with a real server action call
    const response = await createTrip(data);
    onTripCreated(response.data);
    toast.success("Trip Created successfully")
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

      <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brief Description of Trip</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Going to Japan for cherry blossom viewing" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination (Country, City)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Japan, Tokyo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Start Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>End Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="people"
          render={({ field }) => (
            <FormItem>
              <FormLabel>People Going</FormLabel>
              <FormControl>
                <Input type="number" min="1" placeholder="e.g. 5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tripLength"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trip Length (Days)</FormLabel>
              <FormControl>
                <Input type="number" min="1" placeholder="e.g. 5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="activities"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specific activities</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="e.g. visit some place"
                  className="min-h-[80px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget (SGD) </FormLabel>
              <FormControl>
              <Input type="number" min="0" placeholder="e.g. 5000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? (
            <>Generating Itinerary...</>
          ) : (
            <>
              Generate Itinerary <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
