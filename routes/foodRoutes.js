const express = require("express");

const router = express.Router();

const upload =
require("../middleware/uploadMiddleware");

const authMiddleware = require("../middleware/authMiddleware");

const {
    uploadFood
}
=
require("../controllers/foodController");

router.post(
    "/upload",
    authMiddleware,
    upload.single("foodImage"),
    uploadFood
);
module.exports = router;
