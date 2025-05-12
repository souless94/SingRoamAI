import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';

// Mock Prisma
const mockFindUniqueOrThrow = vi.fn();
vi.mock('@/utils/db', () => ({
  default: {
    trip: {
      findUniqueOrThrow: mockFindUniqueOrThrow,
    },
  },
}));

// Import handler after mocking
let GET: typeof import('@/app/api/trips/[id]/route').GET;

beforeEach(async () => {
  vi.resetModules();
  const handler = await import('@/app/api/trips/[id]/route');
  GET = handler.GET;
});

describe('GET /api/trips/[id]', () => {
  it('should return full trip data as JSON', async () => {
    const mockTrip = {
      id: 'trip-123',
      title: 'Test Trip',
      weatherInfo: { season: 'Summer' },
      days: [],
    };

    // Mock Prisma return
    mockFindUniqueOrThrow.mockResolvedValue(mockTrip);

    // Create dummy request and context
    const mockRequest = {} as NextRequest;
    const mockContext = {
      params: Promise.resolve({ id: 'trip-123' }),
    };

    const response = await GET(mockRequest, mockContext);

    expect(mockFindUniqueOrThrow).toHaveBeenCalledWith({
      where: { id: 'trip-123' },
      include: {
        weatherInfo: true,
        days: true,
      },
    });

    expect(response).toBeInstanceOf(NextResponse);
    const json = await response.json();
    expect(json).toEqual(mockTrip);
  });

  it('should throw if trip is not found', async () => {
    mockFindUniqueOrThrow.mockRejectedValue(new Error('Trip not found'));

    const mockRequest = {} as NextRequest;
    const mockContext = {
      params: Promise.resolve({ id: 'nonexistent-trip' }),
    };

    await expect(GET(mockRequest, mockContext)).rejects.toThrow('Trip not found');
  });
});
