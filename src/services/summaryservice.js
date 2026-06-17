const summaryRepository = require('../repositories/summaryRepository');
const healthScoreService = require('./healthScoreService');
const FoodLog = require('../../models/foodModel');

class SummaryService {
  _getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  async recalculateDailyTotals(userId) {
    const todayStr = this._getTodayDateString();
    const todayStart = new Date(todayStr);
    const tomorrowStart = new Date(todayStart);
    tomorrowStart.setDate(todayStart.getDate() + 1);

    const foodLogs = await FoodLog.find({
      userId,
      createdAt: {
        $gte: todayStart,
        $lt: tomorrowStart
      }
    });

    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalSugar = 0;
    let totalFiber = 0;

    foodLogs.forEach(meal => {
      totalCalories += meal.calories || 0;
      totalProtein += meal.protein || 0;
      totalCarbs += meal.carbs || 0;
      totalFats += meal.fat || 0;
      totalSugar += meal.sugar || 0;
      totalFiber += meal.fiber || 0;
    });

    const updatedTotals = {
      totalCalories,
      totalProtein,
      totalCarbs,
      totalFats,
      totalSugar,
      totalFiber
    };
    const savedSummary = await summaryRepository.updateOrCreateSummary(userId, todayStr, updatedTotals);
    const updatedScore = await healthScoreService.calculateUserHealthScore(userId, savedSummary);
    return await summaryRepository.updateOrCreateSummary(userId, todayStr, { healthScore: updatedScore });
  }

  async getTodaySummary(userId) {
    return await this.recalculateDailyTotals(userId);
  }
}

module.exports = new SummaryService();