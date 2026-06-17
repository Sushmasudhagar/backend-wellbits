const express=require("express");

const router=express.Router();

const {
 createWorkstyleProfile,
 getWorkstyleProfiles,
 getWorkstyleProfileById,
 updateWorkstyleProfile,
 deleteWorkstyleProfile
}
=
require("../controllers/workstyleController");

router.post("/create", createWorkstyleProfile);

router.get("/all", getWorkstyleProfiles);

router.get("/:id", getWorkstyleProfileById);

router.put("/:id", updateWorkstyleProfile);

router.delete("/:id", deleteWorkstyleProfile);

module.exports=router;