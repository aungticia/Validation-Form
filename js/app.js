const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const showPasswordCheckbox = document.querySelector('#showPassword');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

form.addEventListener('submit', (e) => {
  
  const validator = (inputElement, validationFunction) => {
    
    if (validationFunction()) {
      inputElement.closest('label').className = 'valid';
      inputElement.nextElementSibling.style.display = 'none';
    } else {
      e.preventDefault();
      inputElement.closest('label').className = 'error';
      inputElement.nextElementSibling.style.display = 'block';
    }
  };
  
  validator(usernameInput, isValidUsername);
  validator(emailInput, isValidEmail);
  validator(passwordInput, isValidPassword);
  
});

showPasswordCheckbox.addEventListener('change', () => {
  passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});
