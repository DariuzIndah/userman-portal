/* Filename: script.js */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();
            if (response.ok) {
                localStorage.setItem('token', result.token);
                window.location.href = 'dashboard.html';
            } else {
                alert('Login gagal: ' + result.error);
            }
        });
    }

    // Load user list on dashboard
    const userList = document.getElementById('user-list');
    if (userList) {
        fetch('/api/users', {
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
        })
        .then(response => response.json())
        .then(users => {
            userList.innerHTML = users.map(user => `
                <tr>
                    <td>${user.username}</td>
                    <td>${user.profile}</td>
                    <td>${user.status}</td>
                    <td><button onclick="deleteUser('${user.username}')">Hapus</button></td>
                </tr>
            `).join('');
        })
        .catch(error => console.error('Gagal memuat user:', error));
    }
});

function deleteUser(username) {
    fetch(`/api/users/${username}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
    })
    .then(response => response.json())
    .then(result => {
        alert(result.message || 'User berhasil dihapus');
        location.reload();
    })
    .catch(error => console.error('Gagal menghapus user:', error));
}
