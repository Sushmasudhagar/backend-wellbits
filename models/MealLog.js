import mongoose from "mongoose";

const mealLogSchema = new mongoose.Schema({

    foodSlot: {
        type: String,
        required: true
    },

    mealStartTime: {
        type: Date
    },

    mealEndTime: {
        type: Date
    },

    duration: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ["Started", "Paused", "Completed"],
        default: "Started"
    }

}, { timestamps: true });

export default mongoose.model("MealLog", mealLogSchema);