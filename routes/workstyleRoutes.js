const express=require("express");

const router=express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const {
 createWorkstyleProfile,
 getWorkstyleProfiles,
 getWorkstyleProfileById,
 updateWorkstyleProfile,
 deleteWorkstyleProfile
}
=
require("../controllers/workstyleController");

router.post("/create", authMiddleware, createWorkstyleProfile);

router.get("/all", authMiddleware, getWorkstyleProfiles);

router.get("/:id", authMiddleware, getWorkstyleProfileById);

router.put("/:id", authMiddleware, updateWorkstyleProfile);

router.delete("/:id", authMiddleware, deleteWorkstyleProfile);

module.exports=router;