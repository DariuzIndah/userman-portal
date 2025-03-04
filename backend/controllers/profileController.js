/* Filename: profileController.js */

const usermanRequest = require('../config/userman');

// Mendapatkan daftar profil
const getProfiles = async (req, res) => {
    try {
        const profiles = await usermanRequest('profile');
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil daftar profil' });
    }
};

// Menambahkan profil baru
const addProfile = async (req, res) => {
    try {
        const { name, price, validity } = req.body;
        const newProfile = await usermanRequest('profile/add', 'POST', { name, price, validity });
        res.json(newProfile);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan profil' });
    }
};

// Menghapus profil
const deleteProfile = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await usermanRequest('profile/remove', 'POST', { name });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus profil' });
    }
};

module.exports = { getProfiles, addProfile, deleteProfile };