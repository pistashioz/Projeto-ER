
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('cPassword');


const confirmPasswordError = document.querySelector('#confPw p');


const alreadyAccButton = document.getElementById('alreadyAcc');
const signUpButton = document.getElementById('signUp');


function validatePassword() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    confirmPasswordError.textContent = ''; 
    confirmPasswordInput.setCustomValidity(''); 
    
 
    alreadyAccButton.style.marginTop = '';
    signUpButton.style.marginTop = '';
  } else {
    confirmPasswordError.textContent = 'Passwords do not match'; 
    confirmPasswordInput.setCustomValidity('Passwords do not match'); 
    
    alreadyAccButton.style.marginTop = '-2.5vh';
    signUpButton.style.marginTop = '-2.5vh';
  }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);
