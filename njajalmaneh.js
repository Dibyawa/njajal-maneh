document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form submit

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Username dan password hardcoded untuk demo
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Validasi login
    if (username === validUsername && password === validPassword) {
        alert('Login berhasil!');
        // Anda bisa mengarahkan ke halaman lain jika login berhasil
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Username atau Password salah';
    }
});
