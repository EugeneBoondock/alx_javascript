function validatePassword () {
    var password = document.getElementById('password');
    if (password.length == 0) {
        error.innerHTML = 'Password should be 8 characters long';
        return false
    }
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)){
        error.innerHTML = 'Password should contain at least 1 uppercase, lowercase, 1 special character and be 8 characters long';
    }

    error.innerHTML.style.color = green 
}

function validateForm () {
    var form = document.getElementById('passwordForm');
    if (!validatePassword) {
        
    }
}