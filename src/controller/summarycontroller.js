const summaryService = require('../services/summaryService');

class SummaryController {
 
  async getDashboardSummary(req, res) {
    try {
      
      const userId = req.user.userId; 

      const dailyData = await summaryService.getTodaySummary(userId);
      
      return res.status(200).json({
        success: true,
        message: "Today's summary metrics retrieved successfully",
        data: dailyData
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error fetching daily summary metrics",
        error: error.message
      });
    }
  }

  async triggerRecalculation(req, res) {
    try {
      const userId = req.user.userId;
      const updatedCard = await summaryService.recalculateDailyTotals(userId);
      
      return res.status(200).json({
        success: true,
        message: "Totals and Health Score recalculated!",
        data: updatedCard
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Recalculation event failed",
        error: error.message
      });
    }
  }
}

module.exports = new SummaryController();