const loginLink = document.getElementById('loginLink');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginModal = document.getElementById('loginModal');
const loginForm = document.getElementById('loginForm');

loginLink.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Check credentials and perform login logic here
    // For simplicity, you can hardcode a username and password
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'user' && password === 'password') {
        alert('Login successful!');
        loginModal.style.display = 'none';
        loginLink.textContent = 'Logout';
        loginLink.href = '#';
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
