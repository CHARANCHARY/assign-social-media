const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    socialMediaHandle: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of Base64-encoded image strings
        required: true,
    },
});

const UserData = mongoose.model('Users-upload-data', userSchema);
module.exports = UserData;
