// Reviews_models

// This is reviews Schema model

// Setup Mongoose connection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating New Schema
const reviewSchema = new Schema({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

// Creating review model:- 
const Review = mongoose.model("Review", reviewSchema);

// Exporting chat model
module.exports = Review;

// .................................................................................................................