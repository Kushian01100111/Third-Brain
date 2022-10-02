const express = require("express");
const router = express.Router();
const inboxController = require("../controllers/personal/inbox");
const projectsController = require("../controllers/personal/projects");
const subTaskController = require("../controllers/personal/projects");

const tasksController = require("../controllers/personal/tasks");
const goalsController = require("../controllers/personal/goals");
const dashboardController = require("../controllers/personal/dashboard");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get('/projects/inprogress', ensureAuth, projectsController.getInProgress);

router.post('/projects/planned', ensureAuth, projectsController.postProject);
router.get('/projects/planned', ensureAuth, projectsController.getPlanned);

router.get('/projects/planned', ensureAuth, projectsController.getPlanned);




module.exports = router;