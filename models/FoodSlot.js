import mongoose from "mongoose";

const foodSlotSchema = new mongoose.Schema({
    slotName: {
        type: String,
        required: true
    },

    startTime: {
        type: String,
        required: true
    },

    endTime: {
        type: String,
        required: true
    }
});

export default mongoose.model("FoodSlot", foodSlotSchema);