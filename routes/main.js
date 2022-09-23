const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const mainController =  require("../controllers/main")
const auth20Controller = require("../controllers/oauth20")
//const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
//router.get("/profile", ensureAuth, postsController.getProfile);
//router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get('/auth/google', auth20Controller.googleLogin)
router.get('/auth/google/callback', auth20Controller.googleCallback)
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;
