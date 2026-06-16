const summaryRepository = require('../repositories/summaryRepository');
const healthScoreService = require('./healthScoreService');

class SummaryService {
  _getTodayDateString() {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  async recalculateDailyTotals(userId) {
    const todayStr = this._getTodayDateString();
    
    const todayMealsDummyData = [
      { name: "Avocado Toast & Eggs", calories: 450, protein: 22, carbs: 35, fats: 18, sugar: 4, fiber: 8 },
      { name: "Protein Shake", calories: 300, protein: 30, carbs: 10, fats: 3, sugar: 2, fiber: 1 },
      { name: "Glazed Donut", calories: 350, protein: 3, carbs: 45, fats: 15, sugar: 28, fiber: 1 }
    ];
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFats = 0;
    let totalSugar = 0;
    let totalFiber = 0;

    todayMealsDummyData.forEach(meal => {
      totalCalories += meal.calories;
      totalProtein += meal.protein;
      totalCarbs += meal.carbs;
      totalFats += meal.fats;
      totalSugar += meal.sugar;
      totalFiber += meal.fiber;
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