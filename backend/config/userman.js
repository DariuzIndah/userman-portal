/* Filename: userman.js */

const axios = require('axios');

const USERMAN_URL = 'http://IP_ROUTER/user?target=%2Fuser%2Fmanager';
const USERMAN_CREDENTIALS = { username: 'admin', password: 'password' };

const usermanRequest = async (endpoint, method = 'GET', data = {}) => {
    try {
        const response = await axios({
            url: `${USERMAN_URL}/${endpoint}`,
            method,
            auth: USERMAN_CREDENTIALS,
            data
        });
        return response.data;
    } catch (error) {
        throw new Error(`Userman request error: ${error.message}`);
    }
};

module.exports = usermanRequest;
