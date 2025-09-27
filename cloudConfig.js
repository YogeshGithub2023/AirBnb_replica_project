// cloudConfig_JS_

// Requiring:- Cloudinary
const cloudinary = require('cloudinary').v2;

// Requiring:- multer-storage-cloudinary
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configuration of Cloudinary:- connect our backend with our cloudinary web account
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Define Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedFormats: ["png", "jpg", "jpeg"],
  },
});

// Exporting 
module.exports = {
    cloudinary,
    storage,
};

// ..............................................................................................................