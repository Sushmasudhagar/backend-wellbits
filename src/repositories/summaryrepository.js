const DailySummary = require('../models/DailySummary');
class SummaryRepository {
  async findByUserAndDate(userId, date) {
    return await DailySummary.findOne({ userId, date });
  }


  async updateOrCreateSummary(userId, date, updateData) {
    return await DailySummary.findOneAndUpdate(
      { userId, date },   
      { $set: updateData }, 
      { new: true, upsert: true } 
    );
  }
}

module.exports = new SummaryRepository();