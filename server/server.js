const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/admin')
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MongoDB = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' })); // You can adjust '10mb' as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
// app.use('/api/admin', adminRoutes);


// MongoDB connection
mongoose.connect(MongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
