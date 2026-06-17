const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    foodName: {
        type: String,
        required: true
    },

    calories: {
        type: Number,
        default: 0
    },

    protein: {
        type: Number,
        default: 0
    },

    carbs: {
        type: Number,
        default: 0
    },

    fat: {
        type: Number,
        default: 0
    },

    sugar: {
        type: Number,
        default: 0
    },

    fiber: {
        type: Number,
        default: 0
    },

    mealType: {
        type: String,
        default: "Meal"
    },

    category: {
        type: String,
        default: "Home"
    },

    dietChart: {
        type: String,
        default: ""
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Food",foodSchema);