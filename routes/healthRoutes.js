const express = require("express");

const router = express.Router();

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
router.post("/create", createHealthProfile);

// Get All
router.get("/all", getHealthProfiles);

// Get Single
router.get("/:id", getHealthProfileById);

// Update
router.put("/:id", updateHealthProfile);

// Delete
router.delete("/:id", deleteHealthProfile);

module.exports = router;