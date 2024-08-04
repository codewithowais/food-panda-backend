const express = require("express");
const router = express.Router();
const { upload, uploadImage } = require("../controllers/uploadController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, upload.single("image"), uploadImage);

module.exports = router;
