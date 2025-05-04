import prisma from '@/utils/db';
import { NextResponse } from 'next/server';


// Pagination parameters
const PAGE_SIZE = 10;

export async function GET(request: Request) {
  // Parse query parameters
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const search = url.searchParams.get('search') || ''; // Get the search term (if provided)

  // Ensure the page number is a positive integer
  if (page < 1) {
    return NextResponse.json({ error: 'Invalid page number' }, { status: 400 });
  }

  try {
    // Fetch the total number of trips that match the search query
    const totalTrips = await prisma.trip.count({
      where: {
        OR: [
          { title: { contains: search, mode: 'insensitive' } }, // Search by title (case-insensitive)
          { location: { contains: search, mode: 'insensitive' } }, // Search by location (case-insensitive)
        ],
      },
    });

    // Calculate total pages based on the number of trips and page size
    const totalPages = Math.ceil(totalTrips / PAGE_SIZE);

    // Fetch trips data for the current page that match the search query
    const trips = await prisma.trip.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: 'insensitive' } }, // Search by title (case-insensitive)
          { location: { contains: search, mode: 'insensitive' } }, // Search by location (case-insensitive)
        ],
      },
      skip: (page - 1) * PAGE_SIZE, // Skip the previous pages
      take: PAGE_SIZE, // Limit the number of results per page
    });

    // Return the paginated trips with the total pages info
    return NextResponse.json({ trips, totalPages });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ error: 'Failed to fetch trips' }, { status: 500 });
  }
}
