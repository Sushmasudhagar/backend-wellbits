const express =
require("express");

const router =
express.Router();

const {
    getDietPlan
} =
require("../controllers/dietController");

router.post(
    "/generate",
    getDietPlan
);

module.exports = router;