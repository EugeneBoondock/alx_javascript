function validateEmail () {
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');

    if (email.length === 0) {
        error.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        error.innerHTML = 'Please enter valid email address.';
        return false;
    }
    error.innerHTML = '';
    return true;
}