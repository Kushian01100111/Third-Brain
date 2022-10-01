const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/work/projects");
const { ensureAuth, ensureGuest } = require("../middleware/auth");



router.get('/projects/inprogress', ensureAuth, projectsController.getInProgress);
router.post('/projects/planned', ensureAuth, projectsController.postProject);

module.exports = router;