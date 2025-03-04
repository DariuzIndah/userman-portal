/* Filename: profiles.js */

const express = require('express');
const axios = require('axios');
const router = express.Router();

// Konfigurasi User Manager MikroTik
const USERMAN_URL = 'http://IP_ROUTER/user?target=%2Fuser%2Fmanager';
const USERMAN_CREDENTIALS = { username: 'admin', password: 'password' };

// Mendapatkan daftar profil
router.get('/profiles', async (req, res) => {
    try {
        const response = await axios.get(`${USERMAN_URL}/profile`, {
            auth: USERMAN_CREDENTIALS
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil daftar profil' });
    }
});

// Menambahkan profil baru
router.post('/profiles', async (req, res) => {
    try {
        const { name, price, validity } = req.body;
        const response = await axios.post(`${USERMAN_URL}/profile/add`, {
            name, price, validity
        }, { auth: USERMAN_CREDENTIALS });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan profil' });
    }
});

// Menghapus profil
router.delete('/profiles/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.post(`${USERMAN_URL}/profile/remove`, { name }, {
            auth: USERMAN_CREDENTIALS
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus profil' });
    }
});

module.exports = router;