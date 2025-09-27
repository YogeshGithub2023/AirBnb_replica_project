// Schema_JS

// Requiring JOI
const Joi = require('joi');

// Now we're going to write the schema, meaning the schema we need to validate
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        country: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null)
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    // review should be object itself
    // If we are getting a request for a review, then the object named review must be present inside it.
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required({}),
});

// ...............................................................................................................................