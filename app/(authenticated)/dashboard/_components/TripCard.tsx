import { Trip } from "@/lib/generated/prisma/client";
import Image from "next/image";

interface TripCardProps {
  trip: Trip; // Accept the trip object as a prop
}

export function TripCard({ trip }: TripCardProps) {
  return (
    <div className="rounded-lg border border-primary/10 bg-background shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-105 group">
      <div className="relative">
        <Image
          src={trip.imageUrl || "/images/placeholder.png"} // Assuming image is part of the trip
          alt={trip.title}
          height={500}
          width={500}
          className="object-cover transition-transform duration-500 max-h-64 w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{trip.title}</h3>
        <p className="text-muted-foreground mb-4">Location: {trip.location}</p>
        <p className="text-muted-foreground text-sm">
          {trip.daysCount} {trip.daysCount > 1 ? "days" : "day"}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-muted-foreground">
            <p className="text-sm">{new Date(trip.startDate).toLocaleDateString()}</p>
            <p className="text-sm">{new Date(trip.endDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
