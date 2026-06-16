import {
    createMeal,
    getMealById,
    updateMeal
} from "../repositories/mealRepository.js";


// Start Meal
export const startMeal = async (foodSlot) => {

    return await createMeal({
        foodSlot,
        mealStartTime: new Date(),
        status: "Started"
    });
};


// Pause Meal
export const pauseMeal = async (id) => {

    return await updateMeal(id, {
        status: "Paused"
    });
};


// End Meal
export const endMeal = async (id) => {

    const meal = await getMealById(id);

    const endTime = new Date();

    const duration =
        Math.floor((endTime - meal.mealStartTime) / 1000);

    return await updateMeal(id, {
        mealEndTime: endTime,
        duration,
        status: "Completed"
    });
};