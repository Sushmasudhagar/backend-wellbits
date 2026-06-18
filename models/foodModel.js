const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },

        foodName: {
            type: String,
            required: true
        },

        calories: {
            type: Number,
            required: true
        },

        protein: {
            type: Number,
            required: true
        },

        carbs: {
            type: Number,
            required: true
        },

        fat: {
            type: Number,
            required: true
        },

        dietChart: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Food", foodSchema);