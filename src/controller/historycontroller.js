const historyService = require('../services/historyservice');

class HistoryController {
  async getUserHistory(req, res) {
    try {
      const userId = req.user.id;
      const { startDate, endDate, page, limit } = req.query;

      const historyTimeline = await historyService.getCleanMealHistory(userId, {
        startDate,
        endDate,
        page,
        limit
      });

      return res.status(200).json(historyTimeline);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Could not retrieve history logs",
        error: error.message
      });
    }
  }
}

module.exports = new HistoryController();