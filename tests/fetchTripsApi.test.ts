import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';

// Mock Prisma
const mockTripFindMany = vi.fn();
const mockTripCount = vi.fn();
vi.mock('@/utils/db', () => ({
  prisma: {
    trip: {
      findMany: mockTripFindMany,
      count: mockTripCount,
    },
  },
}));

// Mock logger
const mockLoggerError = vi.fn();
vi.mock('@/lib/logger', () => ({
  default: {
    error: mockLoggerError,
  },
}));

// Import GET handler after mocking
let GET: typeof import('@/app/api/trips/route').GET;

beforeEach(async () => {
  vi.resetModules();
  const handler = await import('@/app/api/trips/route'); // Adjust path if needed
  GET = handler.GET;
});

function createRequestWithURL(url: string): NextRequest {
  return {
    url,
  } as unknown as NextRequest;
}

describe('GET /api/trips (paginated)', () => {
  it('should return trips and total pages', async () => {
    const trips = [
      { id: '1', title: 'Trip 1', location: 'Paris' },
      { id: '2', title: 'Trip 2', location: 'Rome' },
    ];

    mockTripCount.mockResolvedValue(20); // 20 results total
    mockTripFindMany.mockResolvedValue(trips);

    const request = createRequestWithURL('https://localhost/api/trips?page=1&search=Trip');

    const response = await GET(request);

    expect(mockTripCount).toHaveBeenCalledWith({
      where: {
        OR: [
          { title: { contains: 'Trip', mode: 'insensitive' } },
          { location: { contains: 'Trip', mode: 'insensitive' } },
        ],
      },
    });

    expect(mockTripFindMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { title: { contains: 'Trip', mode: 'insensitive' } },
          { location: { contains: 'Trip', mode: 'insensitive' } },
        ],
      },
      skip: 0,
      take: 10,
    });

    expect(response).toBeInstanceOf(NextResponse);
    const json = await response.json();

    expect(json).toEqual({
      trips,
      totalPages: 2, // 20 results, 10 per page
    });
  });

  it('should return 400 if page is less than 1', async () => {
    const request = createRequestWithURL('https://localhost/api/trips?page=0');
    const response = await GET(request);

    expect(response.status).toBe(400);
    const json = await response.json();
    expect(json).toEqual({ error: 'Invalid page number' });
  });

  it('should return 500 and log error if Prisma throws', async () => {
    mockTripCount.mockRejectedValue(new Error('DB failure'));

    const request = createRequestWithURL('https://localhost/api/trips?page=1');
    const response = await GET(request);

    expect(mockLoggerError).toHaveBeenCalled();
    expect(response.status).toBe(500);
    const json = await response.json();
    expect(json).toEqual({ error: 'Failed to fetch trips' });
  });
});
