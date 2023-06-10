import * as User from "../models/UserModels.js";

const button = document.getElementById("cchanges");
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cpassword');
const confirmPasswordError = document.querySelector('#cpw p');


button.addEventListener("click", () => {
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    User.changePassword(email.value,password.value);

    location.href = "login.html"

});
button.disabled = true;


function validatePassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
  
    if ((password === confirmPassword) ) {
      button.disabled = false;
      confirmPasswordError.textContent = ''; 
  
    } else {
      confirmPasswordError.textContent = 'As passwords não são iguais'; 
      button.disabled = true;
    }
  }
  
  passwordInput.addEventListener('input', validatePassword);
  confirmPasswordInput.addEventListener('input', validatePassword);

  const confirmMailInputError = document.querySelector('#mail p');
  const emailField = document.querySelector("#email");

  function validateEmail() {
    const email = emailField.value;
    if (!email){
      confirmMailInputError.textContent = ''; 
    }else{
      if (User.VerifyMail(email) && User.checkEmail(email)) {
        button.disabled = false;
        confirmMailInputError.textContent = ''; 
      }
      else {
        confirmMailInputError.textContent = 'O email não existe'; 
        button.disabled = true;
      }
    }
  }
  
  emailField.addEventListener('input', validateEmail);
   

