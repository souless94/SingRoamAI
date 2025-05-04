"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
} from "lucide-react";
import { CreateTripForm } from "./_components/createTripForm";
import { PreviewTripForm } from "./_components/PreviewTripForm";
import { useState } from "react";
import { Trip, TripDay, WeatherInfo } from "@/lib/generated/prisma/client";

type TripWithInfo= Trip & {
    days: TripDay[];
    weatherInfo: WeatherInfo;
  };

const CreateTripPage = () => {

  const [trip, setTrip] = useState<TripWithInfo | null>(null);

  const showPreview = !!trip;
  const isGenerating = false;

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
          <div className="lg:col-span-2">
            {!showPreview ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border rounded-lg bg-background">
                <Globe className="h-16 w-16 text-muted-foreground mb-6" />
                <h3 className="text-2xl font-semibold mb-2">
                  Your AI Itinerary Will Appear Here
                </h3>
                <p className="text-muted-foreground max-w-md">
                  Fill out your travel preferences and click "Generate
                  Itinerary" to create your personalized travel plan.
                </p>
              </div>
            ) : (
              
             <PreviewTripForm {...trip} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTripPage;
