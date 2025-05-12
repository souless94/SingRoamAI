import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { z, ZodError } from 'zod';

// Functions to test


// Mock dependencies
// It's often cleaner to mock the entire module and then provide specific mock implementations
// for the functions/objects exported by that module.

// Mock Prisma client
const mockPrisma = {
  weatherInfo: {
    create: vi.fn(),
  },
  trip: {
    create: vi.fn(),
    findUniqueOrThrow: vi.fn(),
    delete: vi.fn(),
  },
  tripDay: {
    createMany: vi.fn(),
  },
};
vi.mock('@/utils/db', () => ({
  default: mockPrisma,
}));

// Mock Unsplash
const mockGetUnSplashImage = vi.fn();
vi.mock('@/utils/unsplash', () => ({
  getUnSplashImage: mockGetUnSplashImage,
}));

// Mock GenAI
const mockGenerateTripPlan = vi.fn();
vi.mock('@/utils/genai', () => ({
  generateTripPlan: mockGenerateTripPlan,
}));

// Mock Schema
// We'll mock safeParse directly in tests or beforeEach for more control
const mockCreateTripSchema = {
  safeParse: vi.fn(),
};
vi.mock("@/schemas/trips/createTripSchema", () => ({
  createTripSchema: mockCreateTripSchema,
}));


const { createTrip, deleteTrip } = await import('@/actions/tripsActions');

// Helper to create ZodError for testing
function createZodError(issues = []) {
  return new ZodError(issues);
}

describe('Trip Actions', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    vi.resetAllMocks();
  });

  afterEach(() => {
    // Clear all mocks after each test to ensure test isolation
    vi.clearAllMocks();
  });

  describe('createTrip', () => {
    const validFormData = {
      title: 'Test Trip',
      destination: 'Test Destination',
      startDate: '2025-12-01',
      endDate: '2025-12-05',
      tripLength: 4,
      people: 2,
      budget: 3000,
      activities: 'Test notes',
    };

    const mockAiResult = {
      weatherInfo: {
        season: 'Winter',
        temperatureInfo: 'Cold',
        description: 'Expect snowy conditions.',
        itemsToPack: ['Warm jacket', 'Gloves'],
        considerations: 'Roads might be icy.',
      },
      imagePrompt: 'snowy mountains adventure',
      days: [
        {
          title: 'Day 1: Arrival',
          date: '2025-12-01',
          morningTitle: 'Arrival and Check-in',
          morning: 'Arrive at destination, check into hotel.',
          afternoonTitle: 'Local Exploration',
          afternoon: 'Explore the nearby town square.',
          eveningTitle: 'Dinner',
          evening: 'Enjoy dinner at a local restaurant.',
        },
        {
          title: 'Day 2: Adventure',
          date: '2025-12-02',
          morningTitle: 'Mountain Hike',
          morning: 'Go for a scenic mountain hike.',
          afternoonTitle: 'Relax',
          afternoon: 'Relax at the hotel spa.',
          eveningTitle: 'Stargazing',
          evening: 'Go stargazing if the sky is clear.',
        },
      ],
    };

    const mockCreatedWeatherInfo = { id: 'weather-123', ...mockAiResult.weatherInfo };
    const mockCreatedTrip = {
      id: 'trip-abc',
      title: validFormData.title,
      location: validFormData.destination,
      startDate: new Date(validFormData.startDate),
      endDate: new Date(validFormData.endDate),
      budget: validFormData.budget,
      weatherInfoid: mockCreatedWeatherInfo.id,
      daysCount: mockAiResult.days.length,
      imageUrl: 'https://mockurl.com/image.jpg',
      isDraft: true,
    };
    const mockFullTrip = {
      ...mockCreatedTrip,
      weatherInfo: mockCreatedWeatherInfo,
      days: mockAiResult.days.map((day, index) => ({
        id: `day-${index + 1}`,
        tripId: mockCreatedTrip.id,
        dayIndex: index + 1,
        ...day,
        date: new Date(day.date)
      })),
    };


    it('should create a trip successfully with valid input', async () => {
      // Arrange
      mockCreateTripSchema.safeParse.mockReturnValue({ success: true, data: validFormData });
      mockGenerateTripPlan.mockResolvedValue(mockAiResult);
      mockPrisma.weatherInfo.create.mockResolvedValue(mockCreatedWeatherInfo);
      mockGetUnSplashImage.mockResolvedValue(mockCreatedTrip.imageUrl);
      mockPrisma.trip.create.mockResolvedValue(mockCreatedTrip);
      mockPrisma.tripDay.createMany.mockResolvedValue({ count: mockAiResult.days.length });
      mockPrisma.trip.findUniqueOrThrow.mockResolvedValue(mockFullTrip);

      // Act
      const result = await createTrip(validFormData);

      // Assert
      expect(mockCreateTripSchema.safeParse).toHaveBeenCalledWith(validFormData);
      expect(mockGenerateTripPlan).toHaveBeenCalledWith(validFormData);
      expect(mockPrisma.weatherInfo.create).toHaveBeenCalledWith({
        data: mockAiResult.weatherInfo,
      });
      expect(mockGetUnSplashImage).toHaveBeenCalledWith(mockAiResult.imagePrompt);
      expect(mockPrisma.trip.create).toHaveBeenCalledWith({
        data: {
          title: validFormData.title,
          location: validFormData.destination,
          startDate: new Date(validFormData.startDate),
          endDate: new Date(validFormData.endDate),
          budget: validFormData.budget,
          weatherInfoid: mockCreatedWeatherInfo.id,
          daysCount: mockAiResult.days.length,
          imageUrl: mockCreatedTrip.imageUrl,
          isDraft: true,
        },
      });
      expect(mockPrisma.tripDay.createMany).toHaveBeenCalledWith({
        data: mockAiResult.days.map((day, index) => ({
          title: day.title,
          tripId: mockCreatedTrip.id,
          dayIndex: index + 1,
          date: new Date(day.date),
          morningTitle: day.morningTitle,
          morning: day.morning,
          afternoonTitle: day.afternoonTitle,
          afternoon: day.afternoon,
          eveningTitle: day.eveningTitle,
          evening: day.evening,
        })),
      });
      expect(mockPrisma.trip.findUniqueOrThrow).toHaveBeenCalledWith({
        where: { id: mockCreatedTrip.id },
        include: {
          weatherInfo: true,
          days: true,
        },
      });
      expect(result).toEqual({ success: true, data: mockFullTrip });
    });

    it('should throw an error if input is invalid', async () => {
      // Arrange
      const zodError = createZodError();
      mockCreateTripSchema.safeParse.mockReturnValue({ success: false, error: zodError });

      // Act & Assert
      await expect(createTrip({
        "special": "invalid input"
      } as any /* or provide invalid data */)).rejects.toThrow('Invalid input');
      expect(mockGenerateTripPlan).not.toHaveBeenCalled();
      expect(mockPrisma.weatherInfo.create).not.toHaveBeenCalled();
      expect(mockPrisma.trip.create).not.toHaveBeenCalled();
    });

    // Add more tests for other scenarios, e.g., if generateTripPlan fails
    it('should propagate error if generateTripPlan fails', async () => {
        mockCreateTripSchema.safeParse.mockReturnValue({ success: true, data: validFormData });
        const genAiError = new Error("AI generation failed");
        mockGenerateTripPlan.mockRejectedValue(genAiError);

        await expect(createTrip(validFormData)).rejects.toThrow("AI generation failed");
        expect(mockPrisma.weatherInfo.create).not.toHaveBeenCalled();
    });

    it('should propagate error if getUnSplashImage fails', async () => {
        mockCreateTripSchema.safeParse.mockReturnValue({ success: true, data: validFormData });
        mockGenerateTripPlan.mockResolvedValue(mockAiResult);
        mockPrisma.weatherInfo.create.mockResolvedValue(mockCreatedWeatherInfo);
        const unsplashError = new Error("Unsplash API error");
        mockGetUnSplashImage.mockRejectedValue(unsplashError);

        await expect(createTrip(validFormData)).rejects.toThrow("Unsplash API error");
        expect(mockPrisma.trip.create).not.toHaveBeenCalled();
    });
  });

  describe('deleteTrip', () => {
    const tripId = 'trip-to-delete-123';

    it('should delete a trip successfully', async () => {
      // Arrange
      mockPrisma.trip.delete.mockResolvedValue({ id: tripId /* ...other trip props */ });

      // Act
      const result = await deleteTrip(tripId);

      // Assert
      expect(mockPrisma.trip.delete).toHaveBeenCalledWith({
        where: { id: tripId },
      });
      expect(result).toEqual({ success: true });
    });

    it('should propagate error if Prisma delete fails', async () => {
      // Arrange
      const dbError = new Error('Database delete failed');
      mockPrisma.trip.delete.mockRejectedValue(dbError);

      // Act & Assert
      await expect(deleteTrip(tripId)).rejects.toThrow('Database delete failed');
      expect(mockPrisma.trip.delete).toHaveBeenCalledWith({
        where: { id: tripId },
      });
    });
  });
});