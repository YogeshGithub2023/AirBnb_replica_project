// Listing_models

// This is Listings Schema model

// Setup Mongoose connection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring Review Model
const Review = require("./Reviews_models.js");

// Define Basic Schema
const listingSchema = new Schema({
    title: {
        type: String, // String Datatype
        required: true // boolean Datatype
    },

    description: String, // String Datatype

    image: {

        url: String,
        filename: String, // String Datatype
    },

    price: Number, // Integer Datatype

    location: String, // String Datatype

    country: String, // String Datatype

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],

    // Creating owner Property for every listing
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    geometry: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        },
    },
});

// Function:- Mongoose Middleware — Listing Schema Post
listingSchema.post("findOneAndDelete", async(listing) => {

    // Loop 1:-
    if(listing) {
        await Review.deleteMany({_id: { $in: listing.reviews }});
    }
});

// Creating chat Model:-
const Listing = mongoose.model("Listing", listingSchema);

// exporting chat model
module.exports = Listing;

// .................................................................................................................