document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        if (username === 'yourusername' && password === 'yourpassword') {
            message.innerText = 'Login successful!';
            message.style.color = 'green';
        } else {
            message.innerText = 'Invalid username or password.';
            message.style.color = 'red';
        }
    });
});