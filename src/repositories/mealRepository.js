import MealLog from "../../models/MealLog.js";

export const createMeal = async (data) => {
    return await MealLog.create(data);
};

export const getMealById = async (id) => {
    return await MealLog.findById(id);
};

export const updateMeal = async (id, data) => {
    return await MealLog.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

export const endMeal = async (id, data) => {
    return await MealLog.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

export const pauseMeal = async (id, data) => {
    return await MealLog.findByIdAndUpdate(
        id,
        data,
        { new: true }
    );
};

export const startMeal = async (data) => {
    return await MealLog.create(data);
}