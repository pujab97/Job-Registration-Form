document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('jobRegistrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const fullname = document.getElementById('fullname');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        // Custom validation for full name
        if (fullname.value.length < 5) {
            fullname.setCustomValidity('Full name must be at least 5 characters long.');
        } else {
            fullname.setCustomValidity('');
        }

        // Custom validation for password
        if (password.value.length < 8 || password.value.toLowerCase() === 'password' || password.value === fullname.value) {
            password.setCustomValidity('Password must be at least 8 characters long and cannot be "password" or your name.');
        } else {
            password.setCustomValidity('');
        }

        // Custom validation for confirm password
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match.');
        } else {
            confirmPassword.setCustomValidity('');
        }

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
        } else {
            alert('Form submitted successfully!');
            form.reset();
            form.classList.remove('was-validated');
        }
    }, false);
});