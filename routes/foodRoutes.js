const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
    uploadFood
} = require("../controllers/foodController");

router.post(
    "/upload",
    upload.single("image"),
    uploadFood
);

module.exports = router;
