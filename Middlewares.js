// Middlewares_JS

// This is all Middlewares, going to attach with Server File

// Requiring ExpressError
const ExpressError = require("./Utils/ExpressError.js");

// Requiring listingSchema
const { listingSchema, reviewSchema } = require("./Schema.js");

// Requiring Listing Model
const Listing = require("./Models/Listings_models.js");

// Requiring Review Model
const Review = require("./Models/Reviews_models.js");

// Middleware 1:- Check if user is logged in
module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.user); // in this we can check that we logged in or logged out
    // console.log(req.path, "..", req.originalUrl);

    // Condition 1:-
    if(!req.isAuthenticated()) {

        // redirect Url Save
        req.session.redirectUrl = req.originalUrl;

        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
};

// Middleware 2:- to save redirect Url
module.exports.saveRedirectUrl = (req, res, next) => {
    
    // Condtion 1:-
    if(req.session.redirectUrl) {
        // using locals and locals not applied in passport so then passport will not create any issue
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Middleware 3:-
module.exports.isOwner = async(req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    // Condition 1:-
    if(!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// Middleware 4:- Validation Listing for Schema (Middleware)
module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);

    // Condition 1:-
    if(error) {
        // Extract error object detials and (el is stnad for individual element)
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Middleware 5:- Validation Review for Schema (Middleware)
module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    // Condition 1:-
    if(error) {
        // Extract error object detials and (el is stnad for individual element)
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

// Middleware 6:-
module.exports.isReviewAuther = async(req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);

    // Condition 1:-
    if(!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

// ........................................................................................................................