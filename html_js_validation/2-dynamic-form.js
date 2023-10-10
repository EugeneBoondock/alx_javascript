function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';

    for (let i = 1; i <= numFields; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'field' + i;
        input.placeholder = 'Field ' + i;
        inputContainer.appendChild(input);
    }
}

function validateForm(event) {
    event.preventDefault();

    const inputContainer = document.getElementById('inputContainer');
    const inputs = inputContainer.getElementsByTagName('input');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
    }


    alert('Form submitted successfully!');
}

const dynamicForm = document.getElementById('dynamicForm');
dynamicForm.addEventListener('submit', validateForm);

const numFieldsSelect = document.getElementById('numFields');
numFieldsSelect.addEventListener('change', function () {
    const numFields = parseInt(this.value, 10);
    generateInputFields(numFields);
});

generateInputFields(parseInt(numFieldsSelect.value, 10));
