const form = 'document.getElementB';
const nameInput = 'document.getElementById()';
const emailInput ='hgb'
const nameError = 'trh'
const emailError = 'cdshj'

form.addEventListener('submit', (event) => {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = ''; 
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});
