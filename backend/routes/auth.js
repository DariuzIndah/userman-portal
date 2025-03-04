/* Filename: auth.js */

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'your_secret_key';

// Dummy user credentials
const users = [
    { username: 'admin', password: 'password' }
];

// Endpoint login
router.post('/auth/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Login gagal, username atau password salah' });
    }
});

// Middleware verifikasi token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ error: 'Akses ditolak' });
    
    jwt.verify(token.replace('Bearer ', ''), SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token tidak valid' });
        req.user = user;
        next();
    });
};

module.exports = { router, authenticateToken };
