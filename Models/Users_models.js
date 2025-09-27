// Users_models

// This is users Schema model

// Setup Mongoose connection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Requiring Passport-local-Mongoose
const passportLocalMongoose = require('passport-local-mongoose');

// Creating User Schema
const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    }
});

// Passing as a Plugin:- it will implement automatically Username, Hashing, Salting and Hash Passwords
// so no need to build from scratch
userSchema.plugin(passportLocalMongoose);

// Exporting User Schema Model
module.exports = mongoose.model('User', userSchema);

// ..........................................................................................................