require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const entryRoutes = require('./routes/entries');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // parse JSON body

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/entries', entryRoutes);

app.use('/api/resources', require('./routes/resources'));


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
