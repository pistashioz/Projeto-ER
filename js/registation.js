var pass1 = document.querySelector('#password');
var pass2 = document.querySelector('#cPassword');
let matchingPass = document.querySelector('p');
function checkPassword(){
    matchingPass.innerText = pass1.value == pass2.value ? '' : 'Password não coincidem '
}

pass1.addEventListener('keyup', () => {
    if (pass2.value.length != 0) checkPassword();
});

pass2.addEventListener('keyup', checkPassword);