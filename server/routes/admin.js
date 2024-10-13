// // Assuming you have already connected to MongoDB
// const express = require('express');
// const router = express.Router();
// const UserSubmission = require('../models/UserSubmission'); // Import your UserSubmission model

// // Route to fetch all user submissions
// router.get('/submissions', async (req, res) => {
//   try {
//     const submissions = await UserSubmission.find();
//     res.status(200).json(submissions);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch user submissions' });
//   }
// });

// module.exports = router;
