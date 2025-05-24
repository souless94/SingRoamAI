"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import { CreateTripForm } from "./_components/createTripForm";
import { PreviewTripForm } from "./_components/PreviewTripForm";
import { useRef, useState } from "react";
import { Trip, TripDay, WeatherInfo } from "@/lib/generated/prisma/client";
import { useSearchParams } from "next/navigation";
import { useReactToPrint } from "react-to-print";
import useSWR from "swr";
import { Button } from "@/components/ui/button";

type TripWithInfo = Trip & {
  days: TripDay[];
  weatherInfo: WeatherInfo;
};

const CreateTripPage = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  const [trip, setTrip] = useState<TripWithInfo | null>(null);

  const searchParams = useSearchParams();
  const tripId = searchParams.get("trip");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR<TripWithInfo>(
    tripId ? `/api/trips/${tripId}` : null, // Only fetch if tripId is present
    fetcher
  );

  if (data && !trip) {
    setTrip(data); // Update the state when the data is available
  }

  if (isLoading) return <div>Loading Trip...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const showPreview = !!trip;

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Create Your AI Travel Itinerary
          </h1>
          <p className="text-muted-foreground">
            Fill in your travel preferences and our AI will generate a
            personalized itinerary for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-2">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Travel Preferences</CardTitle>
                <CardDescription>
                  Tell us about your trip and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CreateTripForm onTripCreated={setTrip} />
              </CardContent>
            </Card>
          </div>

          {/* Output Preview */}
          <div className="lg:col-span-2 m-2">
            {!showPreview ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border rounded-lg bg-background">
                <Globe className="h-16 w-16 text-muted-foreground mb-6" />
                <h3 className="text-2xl font-semibold mb-2">
                  Your AI Itinerary Will Appear Here
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Fill out your travel preferences and click &quot; Generate
                  Itinerary &quot; to create your personalized travel plan.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex justify-end mb-2">
                  <Button variant="outline" onClick={handlePrint} className="no-print">Export to PDF</Button>
                </div>
                <div ref={componentRef}>
                  <PreviewTripForm {...trip} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTripPage;
