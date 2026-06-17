const Food = require("../models/foodModel");

const getNutrition =
require("../services/nutritionService");

const generateDietChart =
require("../services/dietService");

const uploadFood = async (req, res) => {

    try {

        const imagePath = req.file ? req.file.path : "";

        const foodName = req.body.foodName;

        if (!foodName) {
            throw new Error("foodName is required in request body");
        }

        const nutrition =
        await getNutrition(foodName);

        let dietChart = "";
        try {
            dietChart = await generateDietChart({
                ...req.body,
                ...nutrition
            });
        } catch (innerError) {
            dietChart = "Diet chart generation skipped due to missing profile data.";
        }

        const savedFood =
        await Food.create({
            userId: req.user.userId,
            image: imagePath,
            foodName: nutrition.foodName,
            calories: nutrition.calories,
            protein: nutrition.protein,
            carbs: nutrition.carbs,
            fat: nutrition.fat,
            sugar: nutrition.sugar || 0,
            fiber: nutrition.fiber || 0,
            category: req.body.category || "Home",
            mealType: req.body.mealType || "Meal",
            dietChart
        });

        res.status(200).json({
            success: true,
            message: "Food analyzed successfully",
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