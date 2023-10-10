function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const errorElement = document.getElementById('error');
    errorElement.textContent = '';

    if (name.length === 0 || email.length === 0) {
        errorElement.textContent = 'Please fill in all required fields';
    } else {
        alert('Form submitted successfully!');
    }
}

const submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmit);
