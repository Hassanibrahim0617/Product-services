
const main = document.querySelector('main');
let signInForm = document.querySelector('form');
let userName = document.createElement('input');
let password = document.createElement('input');
const btn = document.createElement('div');
let userBtn = document.createElement('button');
userForm =document.querySelector('form')
// display
signInForm.setAttribute('style', 'display:flex;flex-direction:column;');

// usename
userName.setAttribute('type', 'username')
userName.setAttribute('placeholder', 'username');
signInForm.appendChild(userName);

// password
password.setAttribute('type', 'password')
password.setAttribute('placeholder', 'password');
signInForm.appendChild(password);

// button
userBtn.setAttribute('type', 'submit');
userBtn.setAttribute('value', 'submit');
btn.appendChild(userBtn);
signUpForm.appendChild(btn);

