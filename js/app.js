const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Usernames can only contain letters a-z in lowercase
const isValidUsername = () => /^[a-z]+$/.test(usernameInput.value);

// Password must contain a lowercase, uppercase letter and a number
const isValidPassword = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/.test(passwordInput.value);

// Email must contain an @ symbol and a domain name
const isValidEmail = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput.value);

// Refactored using functions
form.addEventListener('submit', e => {
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

/*
// Add an event listener to the form listening for the submit event 
form.addEventListener('submit', e => {
  // validate the username by calling the isValidUsername function
  // if the username is valid, 
  if (isValidUsername()) {
    // add the class "valid" to the parent label of the input
    usernameInput.closest('label').className = 'valid';
    // change the display value of the span to hide the hint from the user
    usernameInput.nextElementSibling.style.display = 'none';
    // else 
  } else {  
    // prevent the form from being submitted
    e.preventDefault();
    // set the class of the label to be "error"
    usernameInput.closest('label').className = 'error';
    // change the display value of the span to show the hint to the user
    usernameInput.nextElementSibling.style.display = 'block';
  }

  // validate the email by calling the isValidEmail function
      // apply the error or valid class based on the returned value
  if (isValidEmail()) {
      // add the class "valid" to the parent label of the input
      emailInput.closest('label').className = 'valid';
      // change the display value of the span to hide the hint from the user
      emailInput.nextElementSibling.style.display = 'none';
      // else 
    } else {  
      // prevent the form from being submitted
      e.preventDefault();
      // set the class of the label to be "error"
      emailInput.closest('label').className = "error";
      // change the display value of the span to show the hint to the user
      emailInput.nextElementSibling.style.display = 'block';
    }

  // validate the password by calling the isValidPassword function
    // apply the error or valid class based on the returned value
  if (isValidPassword()) {
      // add the class "valid" to the parent label of the input
      passwordInput.closest('label').className = "valid";
      // change the display value of the span to hide the hint from the user
      passwordInput.nextElementSibling.style.display = 'none';
      // else 
    } else {  
      // prevent the form from being submitted
      e.preventDefault();
      // set the class of the label to be "error"
      passwordInput.closest('label').className = "error";
      // change the display value of the span to show the hint to the user
      passwordInput.nextElementSibling.style.display = 'block';
  }

});
*/