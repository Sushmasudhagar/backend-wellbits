class HealthScoreService {
  async calculateUserHealthScore(userId, dailySummary) {
   
    let score = 100;

    if (dailySummary.totalCalories > dailySummary.targetCalories) {
      score -= 15;
    }

    if (dailySummary.totalSugar > 50) {
      score -= 10;
    }

    const proteinRatio = dailySummary.totalProtein / dailySummary.targetProtein;
    if (proteinRatio < 0.8) {
      score -= 10; 
    }

    const fakeStepsToday = 3200;
    if (fakeStepsToday < 4000) {
      score -= 10;
    }
    
    if (score < 1) score = 1;
    if (score > 100) score = 100;

    return Math.round(score);
  }
}

module.exports = new HealthScoreService();