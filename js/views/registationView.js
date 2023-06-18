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

  } else {
    confirmPasswordError.textContent = 'As passwords não são iguais'; 
    signUpButton.disabled = true;
  }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);
//-------------------------------END---------------------------//
//Live validation of email

const emailField = document.querySelector("#email");

function validateEmail() {
  const email = emailField.value;
  if (!email){
    confirmMailInputError.textContent = ''; 
  }else{
    if (User.VerifyMail(email)) {
      signUpButton.disabled = false;
      confirmMailInputError.textContent = ''; 
    }
    else {
      confirmMailInputError.textContent = 'O email não se encontra no formato correto'; 
      signUpButton.disabled = true;
    }
  }
}

emailField.addEventListener('input', validateEmail);
//-------------------------------END---------------------------//
//Live validation of username
const userfield = document.querySelector("#username");
function validateUsername() {
  const username = userfield.value;
  if (!username){
    confirmUsername.textContent = ''; 
  }else{
    if (User.checkUser(username)) {
      signUpButton.disabled = false;
      confirmUsername.textContent = 'Nome valido';   

      
    }else {
      confirmUsername.textContent = 'O utilizador já existe'; 
      signUpButton.disabled = true;

    }
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
  window.location.replace("../html/login.html");
});

document.getElementById("alreadyAcc").addEventListener("click",() => {
  window.location.replace("../html/login.html");
});

//-------------------------------END---------------------------//

