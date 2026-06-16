import express from "express";

import {
    startMeal,
    pauseMeal,
    endMeal
} from "../controllers/mealController.js";

const router = express.Router();

router.post("/start", startMeal);

router.put("/pause/:id", pauseMeal);

router.put("/end/:id", endMeal);

export default router;