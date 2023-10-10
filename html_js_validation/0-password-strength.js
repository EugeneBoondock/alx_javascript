function validatePassword () {
    const password = document.getElementById('password');
    const error = document.getElementById('error');

    if (password.length < 8) {
        error.innerHTML = 'Password should be 8 characters long';
        return false;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)){
        error.innerHTML = 'Password should contain at least 1 uppercase, lowercase, 1 special character and be 8 characters long';
    }

    error.innerHTML = '';
    return true;
}

function validateForm () {
    const error = document.getElementById('error');

    if (!validatePassword) {
        error.innerHTML = 'Please fix the errors'
    }
}