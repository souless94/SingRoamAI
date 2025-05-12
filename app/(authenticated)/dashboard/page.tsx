"use client";
import useSWR from "swr";
import { usePathname, useSearchParams } from "next/navigation";
import { SearchBar } from "./_components/SearchBar";
import { TripCard } from "./_components/TripCard";
import { Trip } from "@/lib/generated/prisma";
import {
  Pagination,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";

import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DashboardPage = () => {
  const searchParams = useSearchParams();
  const currentQuery = searchParams.get("query") || ""; // Get the 'query' search parameter
  const currentPage = parseInt(searchParams.get("page") || "1", 10); // Get the current page (default to 1)
  const pathname = usePathname();

  // Construct the API URL with query and page parameters
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // Fetch trips using SWR
  const { data, isLoading, error } = useSWR(
    `/api/trips?query=${currentQuery}&page=${currentPage}`,
    fetcher,
    {
      keepPreviousData: true,
    }
  );

  if (error) return <div>Error fetching trips</div>;
  if (!data) return <div>Loading Page ...</div>;

  const totalTrips = data.trips.length; // You can get the total number of trips from the response
  const totalPages = Math.ceil(totalTrips / 10); // Assuming 10 trips per page (can be changed)

  // Generate page numbers dynamically, e.g., [1, 2, 3]
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container py-6 px-4">
      <div className="flex flex-col space-y-8">
        {/* Welcome Banner with Stats */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-6 mb-6">
          <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.9 25.7C39.8 20.5 35.7 16.5 30.5 13.6C25.3 10.7 19.4 9.2 13.5 9.2C7.6 9.2 1.7 10.7 -3.5 13.6C-8.7 16.5 -12.8 20.5 -15.9 25.7"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M101.9 25.7C98.8 20.5 94.7 16.5 89.5 13.6C84.3 10.7 78.4 9.2 72.5 9.2C66.6 9.2 60.7 10.7 55.5 13.6C50.3 16.5 46.2 20.5 43.1 25.7"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M160.9 25.7C157.8 20.5 153.7 16.5 148.5 13.6C143.3 10.7 137.4 9.2 131.5 9.2C125.6 9.2 119.7 10.7 114.5 13.6C109.3 16.5 105.2 20.5 102.1 25.7"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                d="M219.9 25.7C216.8 20.5 212.7 16.5 207.5 13.6C202.3 10.7 196.4 9.2 190.5 9.2C184.6 9.2 178.7 10.7 173.5 13.6C168.3 16.5 164.2 20.5 161.1 25.7"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h1 className="text-xl font-bold mb-1">Welcome back {}!</h1>
            <p className="text-muted-foreground text-sm">
              Plan your next adventure or revisit an existing trip.
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-4 justify-between items-center">
              <div className="flex gap-2">
                <Button asChild>
                  <Link href="/trips/create">
                    <Plus className="h-4 w-4" />
                    Create New Itinerary
                  </Link>
                </Button>
              </div>
            </div>

            {/* Search Itineraries */}
            <div className="relative w-full max-w-md">
              {/* Search Bar */}
              <SearchBar disabled={isLoading} />
              {/* Loading Indicator */}
              {isLoading && (
                <div className="my-4 flex justify-center w-full">
                  <Progress value={50} className="w-[60%]" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Trips</h2>
          </div>

          {/* Trip Cards */}
          {data.trips.length === 0 ? (
            <div className="text-center text-muted-foreground w-full max-w-lg mx-auto">
              <p>No trips found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-screen-xl mx-auto">
              {data.trips.map((trip: Trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {data.trips.length > 0 && (
          <Pagination className="list-none p-0 m-0">
            <PaginationItem>
              <PaginationPrevious
                href={`${pathname}?page=${
                  currentPage - 1
                }&query=${currentQuery}`}
                aria-disabled={currentPage <= 1}
                className={
                  currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {/* Dynamically generate pagination links */}
            {pageNumbers.map((pageNumber) => (
              <PaginationItem key={pageNumber}>
                <PaginationLink
                  href={`${pathname}?page=${pageNumber}&query=${currentQuery}`}
                  isActive={currentPage === pageNumber}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={`${pathname}?page=${
                  currentPage + 1
                }&query=${currentQuery}`}
                aria-disabled={currentPage >= totalPages}
                className={
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
