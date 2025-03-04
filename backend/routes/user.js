/* Filename: users.js */

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Konfigurasi User Manager MikroTik
const USERMAN_URL = 'http://IP_ROUTER/user?target=%2Fuser%2Fmanager';
const USERMAN_CREDENTIALS = { username: 'admin', password: 'password' };

// Mendapatkan daftar user
router.get('/users', async (req, res) => {
    try {
        const response = await axios.get(`${USERMAN_URL}/user`, {
            auth: USERMAN_CREDENTIALS
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil daftar user' });
    }
});

// Menambahkan user baru
router.post('/users', async (req, res) => {
    try {
        const { username, password, profile } = req.body;
        const response = await axios.post(`${USERMAN_URL}/user/add`, {
            username, password, profile
        }, { auth: USERMAN_CREDENTIALS });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan user' });
    }
});

// Menghapus user
router.delete('/users/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.post(`${USERMAN_URL}/user/remove`, { username }, {
            auth: USERMAN_CREDENTIALS
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus user' });
    }
});

module.exports = router;
