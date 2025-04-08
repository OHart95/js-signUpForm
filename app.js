// Get the form and the submit button
const form = document.getElementById('signupform');
const submitButton = form.querySelector('button[type="submit"]');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
    // Prevent form submission until validation is complete
    event.preventDefault();

    // Clear any previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((error) => {
        error.style.display = 'none';
    });

    // Check for each required field
    let isValid = true;

    // First Name
    const firstName = document.getElementById('firstName');
    if (firstName.value.trim() === '') {
        document.querySelector('#firstName + .error-message').style.display = 'block';
        isValid = false;
    }

    // Last Name
    const lastName = document.getElementById('lastName');
    if (lastName.value.trim() === '') {
        document.querySelector('#lastName + .error-message').style.display = 'block';
        isValid = false;
    }

    // Email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        document.querySelector('#email + .error-message').style.display = 'block';
        isValid = false;
    }

    // phone number
    const phoneNumber = document.querySelector('#phoneNumber');
    if (phoneNumber.value.trim().length != 11) {
        document.querySelector('#phoneNumber + .error-message').style.display = 'block';
        isValid = false;
    }

    // Password
    const password = document.getElementById('password');
    if (password.value.trim() === '') {
        document.querySelector('#password + .error-message').style.display = 'block';
        isValid = false;
    }

    // Confirm Password
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value.trim() === '' || confirmPassword.value !== password.value) {
        document.querySelector('#confirmPassword + .error-message').style.display = 'block';
        isValid = false;
    }

    // If everything is valid, allow the form to submit
    if (isValid) {
        form.submit(); // Submit the form
    }
});
