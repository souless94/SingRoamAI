import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trip } from "@/lib/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface TripCardProps {
  trip: Trip; // Accept the trip object as a prop
}

export function TripCard({ trip }: TripCardProps) {
  const router = useRouter();

  const onDelete = async (tripId: string) => {
    const confirmed = confirm("Are you sure you want to delete this trip?");
    if (!confirmed) return;

    try {
      const res = await fetch("/api/trips/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tripId }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to delete trip");
      }

      toast.success("Trip has been deleted");
      router.refresh();
    } catch (error: unknown) {
      console.error("Delete trip error:", error);
      if (error instanceof Error) {
        toast.error(error.message || "Something went wrong");
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{trip.title}</CardTitle>
        <CardDescription>
          <Image
            src={trip.imageUrl ?? "/images/placeholder.png"} // Assuming image is part of the trip
            alt={trip.title}
            height={500}
            width={500}
            className="object-cover transition-transform duration-500 max-h-64 w-full"
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/trips/create/?trip=${trip.id}`}>{trip.title}</Link>
        </h3>
        <p className="text-muted-foreground mb-4">Location: {trip.location}</p>
        <p className="text-muted-foreground text-sm">
          {trip.daysCount} {trip.daysCount > 1 ? "days" : "day"}
        </p>
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground">
          <p className="text-sm">
            {new Date(trip.startDate).toLocaleDateString()} to{" "}
            {new Date(trip.endDate).toLocaleDateString()}
          </p>
        </div>
      </CardFooter>
      <CardAction className="m-4">
        <Button variant="outline" onClick={() => onDelete(trip.id)}>
          Delete
        </Button>
      </CardAction>
    </Card>
  );
}

{
  /* <div className="rounded-lg border border-primary/10 bg-background shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:scale-105 group">

      <div className="relative">
        <Image
          src={ trip.imageUrl ?? "/images/placeholder.png"} // Assuming image is part of the trip
          alt={trip.title}
          height={500}
          width={500}
          className="object-cover transition-transform duration-500 max-h-64 w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2"><Link href={`/trips/edit/${trip.id}`}>{trip.title}</Link></h3>
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
    </div> */
}
