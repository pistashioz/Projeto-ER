import * as User from "../models/UserModels.js";

//Validation of matching password
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cPassword');


const confirmPasswordError = document.querySelector('#confPw p');
const confirmMailInputError = document.querySelector('#mail p');
const confirmUsername = document.querySelector('#user p');
const alreadyAccButton = document.getElementById('alreadyAcc');
const signUpButton = document.getElementById('signUp');
signUpButton.disabled = true;
function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if ((password === confirmPassword) ) {
    signUpButton.disabled = false;
    confirmPasswordError.textContent = ''; 
    confirmPasswordInput.setCustomValidity(''); 
    alreadyAccButton.style.marginTop = '';
    signUpButton.style.marginTop = '';

  } else {
    confirmPasswordError.textContent = 'As passwords não são iguais'; 
    confirmPasswordInput.setCustomValidity('As passwords não são iguais'); 

    alreadyAccButton.style.marginTop = '-2.5vh';
    signUpButton.style.marginTop = '-2.5vh';
    signUpButton.disabled = true;
  }
}
//-------------------------------END---------------------------//
//Live validation of username
const userfield = document.querySelector("#username");
const emailField = document.querySelector("#email");

function validateUsername() {
  const username = userfield.value;
  if (User.checkUser(username)) {
    signUpButton.disabled = false;
    confirmPasswordError.textContent = ''; 
    confirmPasswordInput.setCustomValidity(''); 
    alreadyAccButton.style.marginTop = '';
    signUpButton.style.marginTop = '';
  }
  else {
    confirmMailInputError.textContent = 'mail errado'; 
    confirmMailInputError.setCustomValidity('mail errado');

    alreadyAccButton.style.marginTop = '-2.5vh';
    signUpButton.style.marginTop = '-2.5vh';
    signUpButton.disabled = true;
  }
}

function validateUsername() {
  const username = userfield.value;
   
  if (User.checkUser(username)) {
    signUpButton.disabled = false;
    confirmUsername.textContent = 'nome valido :)'; 
    confirmUsername.setCustomValidity('nome valido :)'); 
    alreadyAccButton.style.marginTop = '';
    signUpButton.style.marginTop = '';
    
  } else {
    confirmPasswordError.textContent = 'Utilizador já existe'; 
    confirmPasswordInput.setCustomValidity('Utilizador já existe');

    alreadyAccButton.style.marginTop = '-2.5vh';
    signUpButton.style.marginTop = '-2.5vh';
    signUpButton.disabled = true;
  }
}

userfield.addEventListener('input', validateUsername);

//-------------------------------END---------------------------//
//ADD Acount//
signUpButton.addEventListener("click", function (){
  let username = userfield.value;
  let password = document.querySelector("#password");
  let email = emailField.value;
  User.add(username,password.value,email);
  window.location.replace("../index.html");
});
