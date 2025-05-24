import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trip, TripDay, WeatherInfo } from "@/lib/generated/prisma/client";
import { Separator } from "@radix-ui/react-separator";
import { forwardRef } from 'react';

type TripWithInfo= Trip & {
    days: TripDay[];
    weatherInfo: WeatherInfo;
  };


export function PreviewTripFormInner(trip: TripWithInfo, ref: React.Ref<HTMLDivElement>) {
  return (
    <Card ref={ref} >
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl">{trip.title}</CardTitle>
            <CardDescription>
              {new Date(trip.startDate).toLocaleDateString()} -{" "}
              {new Date(trip.endDate).toLocaleDateString()} • Budget of SGD ${" "}
              {trip.budget}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="itinerary">
          <TabsList>
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="weather">Weather</TabsTrigger>
          </TabsList>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary" className="space-y-6">
            <div className="space-y-6">
              {trip.days.map((day) => (
                <div key={day.dayIndex} className="print-page-break">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{day.title}</h3>

                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg bg-muted/30">
                        <div className="flex items-center mb-2">
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          >
                            Morning
                          </Badge>
                          <span className="text-sm text-muted-foreground ml-2">
                            8:00 AM - 12:00 PM
                          </span>
                        </div>
                        <h4 className="font-medium mb-1">{day.morningTitle}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {day.morning}
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/30">
                        <div className="flex items-center mb-2">
                          <Badge
                            variant="outline"
                            className="bg-blue-100 text-blue-800 hover:bg-blue-100"
                          >
                            Afternoon
                          </Badge>
                          <span className="text-sm text-muted-foreground ml-2">
                            12:30 PM - 5:00 PM
                          </span>
                        </div>
                        <h4 className="font-medium mb-1">
                          {day.afternoonTitle}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {day.afternoon}
                        </p>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/30">
                        <div className="flex items-center mb-2">
                          <Badge
                            variant="outline"
                            className="bg-purple-100 text-purple-800 hover:bg-purple-100"
                          >
                            Evening
                          </Badge>
                          <span className="text-sm text-muted-foreground ml-2">
                            6:00 PM - 10:00 PM
                          </span>
                        </div>
                        <h4 className="font-medium mb-1">{day.eveningTitle}</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          {day.evening}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Weather Tab */}
          <TabsContent value="weather" className="space-y-4">
            <div className="p-6 border rounded-lg bg-muted/30">
              <h3 className="text-xl font-semibold mb-4">Season & Weather</h3>
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-medium">Season is {trip.weatherInfo.season}</h4>
                  <p className="text-muted-foreground">Average Temperature is around : {trip.weatherInfo.temperatureInfo}</p>
                </div>
              </div>

              <div className="space-y-3">
                <p>{trip.weatherInfo.description}</p>

                <h4 className="font-medium mt-4">What to Pack:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {trip.weatherInfo?.itemsToPack && trip.weatherInfo.itemsToPack.split(",").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h4 className="font-medium mt-4">Weather Considerations:</h4>
                <p className="text-muted-foreground">{trip.weatherInfo?.considerations}</p>
              </div>
            </div>
          </TabsContent>

          {/* Costs Tab */}
        </Tabs>
      </CardContent>
    </Card>
  );
}

export const PreviewTripForm = forwardRef(PreviewTripFormInner);