const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const mainController = require("../controllers/main");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/", ensureAuth, mainController.getMain)


module.exports = router;
