const mongoose = require('mongoose');

class HistoryRepository {
  
  async findLogsByDateRange(userId, startDate, endDate, page, limit) {
    const skipAmount = (page - 1) * limit;
    const FoodLog = mongoose.model('FoodLog');

    const logs = await FoodLog.find({
      userId: userId,
      createdAt: {
        $gte: new Date(startDate),
        $lte: new Date(endDate) 
      }
    })
    .sort({ createdAt: -1 }) 
    .skip(skipAmount)        
    .limit(limit);           
    const totalLogs = await FoodLog.countDocuments({
      userId: userId,
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });

    return { logs, totalLogs };
  }
}
module.exports = new HistoryRepository();