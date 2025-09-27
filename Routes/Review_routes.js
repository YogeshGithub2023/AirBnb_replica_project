// Review_routes

// This is Review, going to attach with Server File

// create express app
const express = require("express");
const router = express.Router({ mergeParams: true });

// Requiring wrapAsync
const wrapAsync = require("../Utils/WrapAsync.js");

// Requiring ExpressError
const ExpressError = require("../Utils/ExpressError.js");

// Requiring Review Model
const Review = require("../Models/Reviews_models.js");

// requiring Listing model from another js file with another folder
const Listing = require("../Models/Listings_models.js");

// Requiring Validate Review
const { validateReview, isLoggedIn, isReviewAuther } = require("../Middlewares.js");

// Requiring Reviews Controllers
const reviewController = require("../Controllers/Reviews_Controllers.js");

// All Reviews Route and We'll replace app with router because we have access to the router, but not to app.js
// Route 1:- Reviews — Post Route
// Reviews always accessing with listings
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Route 2:- Delete Reviews Route
router.delete("/:reviewId", isLoggedIn, isReviewAuther, wrapAsync(reviewController.destroyReview));

// exporting Reviews router object
module.exports = router;

// .......................................................................................................................