const mongoose= require('mongoose');
DailySummarySchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    date:{
        type:String,
        required:true
    },
    totalCalories:{type:Number,default:0},
    totalProtein: { type: Number, default: 0 },
    totalCarbs: { type: Number, default: 0 },
    totalFats: { type: Number, default: 0 },
    totalSugar: { type: Number, default: 0 },
    totalFiber: { type: Number, default: 0 },

    targetCalories: { type: Number, default: 2000 },
   targetProtein: { type: Number, default: 150 },
   targetCarbs: { type: Number, default: 250 },
   targetFats: { type: Number, default: 70 },
   healthScore: { type: Number, default: 100 }
}, {
  timestamps: true 
});
DailySummarySchema.index({ userId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('DailySummary', DailySummarySchema);