/* Filename: userController.js */

const usermanRequest = require('../config/userman');

// Mendapatkan daftar user
const getUsers = async (req, res) => {
    try {
        const users = await usermanRequest('user');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil daftar user' });
    }
};

// Menambahkan user baru
const addUser = async (req, res) => {
    try {
        const { username, password, profile } = req.body;
        const newUser = await usermanRequest('user/add', 'POST', { username, password, profile });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan user' });
    }
};

// Menghapus user
const deleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        const response = await usermanRequest('user/remove', 'POST', { username });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus user' });
    }
};

module.exports = { getUsers, addUser, deleteUser };