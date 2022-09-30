const projectsController = require("../controllers/personal/projects");
const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.post('/planned', ensureAuth, projectsController.postProject);


module.exports = router