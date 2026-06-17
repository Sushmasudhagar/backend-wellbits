const historyRepository = require('../repositories/historyRepository');

class HistoryService {
  async getCleanMealHistory(userId, filters) {
    const page = parseInt(filters.page, 10) || 1;
    const limit = parseInt(filters.limit, 10) || 10;
    const startDate = filters.startDate || new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0];
    const endDate = filters.endDate || new Date().toISOString().split('T')[0];

    const { logs, totalLogs } = await historyRepository.findLogsByDateRange(
      userId,
      startDate,
      endDate,
      page,
      limit
    );

    return {
      success: true,
      range: {
        startDate,
        endDate
      },
      pagination: {
        currentPage: page,
        perPage: limit,
        totalItems: totalLogs,
        totalPages: Math.max(1, Math.ceil(totalLogs / limit))
      },
      meals: logs
    };
  }
}

module.exports = new HistoryService();