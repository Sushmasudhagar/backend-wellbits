import express from "express";
import * as mealController from "../controllers/mealController.js";

const router = express.Router();

router.post("/start", mealController.startMeal);

router.put("/pause/:id", mealController.pauseMeal);

router.put("/end/:id", mealController.endMeal);

export default router;