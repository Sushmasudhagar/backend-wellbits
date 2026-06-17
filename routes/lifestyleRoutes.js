const express=require("express");

const router=express.Router();

const {
 createLifestyleProfile,
 getLifestyleProfiles,
 getLifestyleProfileById,
 updateLifestyleProfile,
 deleteLifestyleProfile
}
=
require("../controllers/lifestyleController");

router.post("/create", createLifestyleProfile);

router.get("/all", getLifestyleProfiles);

router.get("/:id", getLifestyleProfileById);

router.put("/:id", updateLifestyleProfile);

router.delete("/:id", deleteLifestyleProfile);

module.exports=router;