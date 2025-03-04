/* Filename: authMiddleware.js */

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

// Middleware untuk verifikasi token JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(403).json({ error: 'Akses ditolak' });
    
    jwt.verify(token.replace('Bearer ', ''), SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token tidak valid' });
        req.user = user;
        next();
    });
};

module.exports = { authenticateToken };
