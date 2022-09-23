const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const mainController = require("../controllers/main");
const { ensureAuth, ensureGuest } = require("../middleware/auth");


router.get("/", ensureAuth, mainController.getMain)
//Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost);

// router.post("/createPost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);






module.exports = router;
