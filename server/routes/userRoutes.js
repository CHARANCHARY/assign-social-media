const express = require('express');
const router = express.Router();
const UserData = require('../models/uploadschema'); // Assuming you have a User model

// Route to handle user submission with Base64 encoded images
router.post('/submit', async (req, res) => {
    try {
        const { name, socialMediaHandle, images } = req.body;

        // Create new user entry with images
        const newUser = new UserData({
            name,
            socialMediaHandle,
            images // Save the array of Base64-encoded images
        });

        
        await newUser.save();
        // console.log(newUser);
        res.status(200).json({ message: 'User submitted successfully!' });
    } catch (error) {
        console.error('Error submitting user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


router.get('/submissions', async (req, res) => {
    try {
        const submissions = await UserData.find(); // Retrieve all submissions from the database
        console.log(submissions);
        console.log(UserData);
        res.status(200).json(submissions); // Send back the retrieved data
    } catch (error) {s
        console.error('Error fetching submissions:', error);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router;
