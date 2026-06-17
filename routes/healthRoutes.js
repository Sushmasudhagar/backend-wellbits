const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
 createHealthProfile,
 getHealthProfiles,
 getHealthProfileById,
 updateHealthProfile,
 deleteHealthProfile
}
=
require("../controllers/healthController");

// Create
router.post("/create", authMiddleware, createHealthProfile);

// Get All
router.get("/all", authMiddleware, getHealthProfiles);

// Get Single
router.get("/:id", authMiddleware, getHealthProfileById);

// Update
router.put("/:id", authMiddleware, updateHealthProfile);

// Delete
router.delete("/:id", authMiddleware, deleteHealthProfile);

module.exports = router;