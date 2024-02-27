document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        
        if (username === 'Nivesh' && password === 'Nivesh@123') {
            // alert('Login successful! Redirecting...');
          
            window.location.href = 'home.html';
        } else {
            alert('Login failed. Please try again.');
        }
    });
});
