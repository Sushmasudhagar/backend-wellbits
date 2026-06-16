import * as mealService from "../services/mealService.js";


// Start Meal
export const startMeal = async (req, res) => {

    try {

        const meal = await mealService.startMeal(
            req.body.foodSlot
        );

        res.status(201).json(meal);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// Pause Meal
export const pauseMeal = async (req, res) => {

    try {

        const meal = await mealService.pauseMeal(
            req.params.id
        );

        res.json(meal);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};


// End Meal
export const endMeal = async (req, res) => {

    try {

        const meal = await mealService.endMeal(
            req.params.id
        );

        res.json(meal);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};