# Userman Portal

Userman Portal adalah aplikasi berbasis web untuk mengelola pengguna dan profil User Manager pada MikroTik. Aplikasi ini menyediakan fitur login, manajemen pengguna, pengaturan profil, dan batch user.

## ✨ Fitur
- 🔐 **Autentikasi pengguna** menggunakan JWT
- 📋 **Manajemen profil Userman**
- 👥 **Manajemen akun pengguna**
- 📊 **Dashboard interaktif** untuk memantau pengguna dan paket

## 🚀 Instalasi
1. **Clone repository ini**:
   ```sh
   git clone https://github.com/DariuzIndah/userman-portal.git
   cd userman-portal
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Konfigurasi file `.env`**:
   ```sh
   # Konfigurasi koneksi ke MikroTik Userman
   MIKROTIK_HOST=192.168.1.1
   MIKROTIK_USER=admin
   MIKROTIK_PASSWORD=password_anda
   MIKROTIK_PORT=8728  # Default API port

   # Secret key untuk JWT
   SECRET_KEY=your_secret_key
   ```
4. **Jalankan server**:
   ```sh
   npm start
   ```
5. **Akses aplikasi** melalui `http://localhost:3000`

## 📁 Struktur Proyek
```
/userman-portal
│── /backend
│   │── server.js
│   │── /routes
│   │── /config
│   │── /controllers
│   │── /middlewares
│
│── /frontend
│   │── /public
│   │── /views
│   │── index.html
│   │── dashboard.html
│   │── login.html
│   │── style.css
│   │── script.js
│
│── package.json
│── README.md
```

## 📜 Lisensi
Proyek ini dilisensikan di bawah lisensi **MIT**.

---
🚀 Dibuat dengan ❤️ untuk membantu mengelola User Manager MikroTik lebih mudah!
