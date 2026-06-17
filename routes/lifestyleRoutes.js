const express=require("express");

const router=express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
 createLifestyleProfile,
 getLifestyleProfiles,
 getLifestyleProfileById,
 updateLifestyleProfile,
 deleteLifestyleProfile
}
=
require("../controllers/lifestyleController");

router.post("/create", authMiddleware, createLifestyleProfile);

router.get("/all", authMiddleware, getLifestyleProfiles);

router.get("/:id", authMiddleware, getLifestyleProfileById);

router.put("/:id", authMiddleware, updateLifestyleProfile);

router.delete("/:id", authMiddleware, deleteLifestyleProfile);

module.exports=router;