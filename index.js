const signupForm = document.getElementById('signup-form');
const successMessage = document.getElementById('success-message');
const errorMessageBox = document.getElementById('error-message');
const signupButton = document.getElementById('signup-btn');
const goBackButton = document.getElementById('go-back-btn');
const emailContent = document.getElementById('email-content');

const emailRegex = /^[^\s@]+[0-9]@[^\s@]+\.[^\s@]+$/;

signupButton.addEventListener('click', (event)=> {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !emailRegex.test(emailValue)) {
        errorMessageBox.style.display = 'block';
        successMessage.style.display = 'none';
    }else {
        signupForm.style.display = 'none';
        successMessage.style.display = 'block';
        errorMessageBox.style.display = 'none';
        emailContent.textContent = emailValue;
    }
});

goBackButton.addEventListener('click', () => {
    signupForm.style.display = 'block';
    successMessage.style.display = 'none';
    errorMessageBox.style.display = 'none';

});