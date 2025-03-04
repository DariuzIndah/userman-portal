/* Filename: server.js */

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Import routes
const userRoutes = require('./routes/users');
const profileRoutes = require('./routes/profiles');
const authRoutes = require('./routes/auth');

// Menggunakan routes
app.use('/api', userRoutes);
app.use('/api', profileRoutes);
app.use('/api', authRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;