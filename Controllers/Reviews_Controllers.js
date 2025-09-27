// Reviews_Controllers_JS

// Here, we are going to store all callbacks, which will work to render all Reviews

// Requiring Listing Model
const Listing = require("../Models/Listings_models");

// Requiring Review Model
const Review = require("../Models/Reviews_models");

// Function 1:-
module.exports.createReview = async(req, res) => {

    let listing = await Listing.findById(req.params.id);

    // Creating New Review
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    
    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
};

// Function 2:-
module.exports.destroyReview = async(req, res) => {
    let {id, reviewId} = req.params;
    
    await Listing.findByIdAndUpdate(id, {$pull: { reviews: reviewId }});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");

    // redirect to our show page
    res.redirect(`/listings/${id}`);
};

// ..............................................................................................................