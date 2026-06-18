const Food = require("../models/foodModel");

const getNutrition =
    require("../services/nutritionService");

const {
    generateDietPlan
} = require("../services/dietService");

const uploadFood = async (req, res) => {

    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        const imagePath = req.file.path;

        // Temporary hardcoded food name
        const foodName = "Chicken Biryani";

        const nutrition =
            await getNutrition(foodName);

        const dietChart =
            await generateDietPlan(nutrition);

        const savedFood =
            await Food.create({

                image: imagePath,

                foodName: nutrition.foodName,

                calories: nutrition.calories,

                protein: nutrition.protein,

                carbs: nutrition.carbs,

                fat: nutrition.fat,

                dietChart
            });

        res.status(200).json({

            success: true,

            message:
                "Food analyzed successfully",

            data: savedFood
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    uploadFood
};