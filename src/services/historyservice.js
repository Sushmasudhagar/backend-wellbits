class HistoryService {
  async getCleanMealHistory(userId, filters) {
    const dummyMealHistory = [
      {
        _id: "mock_log_01",
        mealType: "Breakfast",
        foodName: "Oatmeal with Berries",
        calories: 320,
        protein: 12,
        carbs: 55,
        fats: 5,
        sugar: 12,
        fiber: 9,
        createdAt: "2026-06-15T08:30:00.000Z"
      },
      {
        _id: "mock_log_02",
        mealType: "Lunch",
        foodName: "Grilled Chicken Salad",
        calories: 520,
        protein: 45,
        carbs: 15,
        fats: 18,
        sugar: 3,
        fiber: 5,
        createdAt: "2026-06-15T13:15:00.000Z"
      },
      {
        _id: "mock_log_03",
        mealType: "Dinner",
        foodName: "Salmon and Quinoa",
        calories: 650,
        protein: 40,
        carbs: 48,
        fats: 22,
        sugar: 1,
        fiber: 6,
        createdAt: "2026-06-14T19:45:00.000Z"
      },
      {
        _id: "mock_log_04",
        mealType: "Snack",
        foodName: "Greek Yogurt",
        calories: 150,
        protein: 15,
        carbs: 6,
        fats: 2,
        sugar: 4,
        fiber: 0,
        createdAt: "2026-06-13T16:00:00.000Z"
      }
    ];

    return {
      success: true,
      range: {
        startDate: filters.startDate || "2026-06-10",
        endDate: filters.endDate || "2026-06-16"
      },
      pagination: {
        currentPage: parseInt(filters.page) || 1,
        perPage: parseInt(filters.limit) || 10,
        totalItems: dummyMealHistory.length,
        totalPages: 1
      },
      meals: dummyMealHistory
    };
  }
}

module.exports = new HistoryService();