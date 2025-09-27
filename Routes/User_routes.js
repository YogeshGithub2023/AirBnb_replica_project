// Review_routes

// This is Review, going to attach with Server File

// create express app
const express = require("express");
const router = express.Router();

// Requiring Users Model
const User = require("../Models/Users_models.js");

// Requiring WrapAsync Model
const WrapAsync = require("../Utils/WrapAsync");

// Requiring Passport
const passport = require("passport");

// Requiring Middleware 2 from main Middleware file:-
const { saveRedirectUrl } = require("../Middlewares.js");

// Requiring Users Controllers
const userController = require("../Controllers/Users_Controllers.js");

// Router.route 1:-
router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(WrapAsync(userController.signUp));

// Router.route 2:-
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true, 
    }), userController.afterLogin
);

// Route 5:- sending this GET route to Logout
router.get("/logout", userController.logout);

// exporting User router object
module.exports = router;

// ........................................................................................................................