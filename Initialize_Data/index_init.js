// Initialize_Index_JS

// Here, we are writing whole logic of Database Initialization

const mongoose = require("mongoose");
const initData = require("./data_init.js");
const Listing = require("../Models/Listings_models.js");

// Basic connection:- Database Created
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Mongoose connection setup
main().then((res) => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

// Database Created with function
async function main() {
  await mongoose.connect(MONGO_URL);
};

// Initialize Database
const initDB = async () => {
  await Listing.deleteMany({});

  // this map() function will creatre new function, and owner property will insert in new array
  initData.data = initData.data.map((obj) => ({...obj, owner: "68be617d5fa0df467efa938e"}));
  await Listing.insertMany(initData.data);
  console.log("Data was initialized");
};

initDB();

// .................................................................................................................