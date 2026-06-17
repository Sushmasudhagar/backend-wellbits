const FoodLog = require('../../models/foodModel');

class HistoryRepository {
  
  async findLogsByDateRange(userId, startDate, endDate, page, limit) {
    const skipAmount = (page - 1) * limit;
    const start = startDate ? new Date(startDate) : new Date(0);
    const end = endDate ? new Date(endDate) : new Date();

    const logs = await FoodLog.find({
      userId: userId,
      createdAt: {
        $gte: start,
        $lte: end
      }
    })
    .sort({ createdAt: -1 })
    .skip(skipAmount)
    .limit(limit);

    const totalLogs = await FoodLog.countDocuments({
      userId: userId,
      createdAt: { $gte: start, $lte: end }
    });

    return { logs, totalLogs };
  }
}
module.exports = new HistoryRepository();