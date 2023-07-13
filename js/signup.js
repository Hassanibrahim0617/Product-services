const  signUpForm = document.querySelector('main');
let userName = document.createElement('input');
let password = document.createElement('input');
let email= document.createElement('input');
let fullname= document.createElement('input');
let confirmPassword= document.createElement('input');
let dob = document.createElement('input');
let phoneNumber = document.createElement('input');
let homeAdd = document.createElement('input');
const btn = document.createElement('div');
let userBtn = document.createElement('button');

// form display
signUpForm.setAttribute('style', 'display:flex;flex-direction:column;');
 
// fullname
fullname.setAttribute('type', 'fullname');
fullname.setAttribute('placeholder', 'fullname');
signUpForm.appendChild(fullname);

// email
email.setAttribute('type', 'email');
email.setAttribute('placeholder', 'mail@email.com');
signUpForm.appendChild(email);

// username
userName.setAttribute('type', 'username');
userName.setAttribute('placeholder', 'username');
signUpForm.appendChild(userName);

// password
password.setAttribute('type', 'password');
password.setAttribute('placeholder', 'password');
signUpForm.appendChild(password);


// confirm password
confirmPassword.setAttribute('type', 'password');
confirmPassword.setAttribute('placeholder', 'confirm password');
signUpForm.appendChild(confirmPassword);

// date of birth
dob.setAttribute('type', 'date');
dob.setAttribute('placeholder', 'date of birth');
signUpForm.appendChild(dob);

// phone number
phoneNumber.setAttribute('type', 'number');
phoneNumber.setAttribute('placeholder', 'Phone Number');
signUpForm.appendChild(phoneNumber);

// home address
homeAdd.setAttribute('type', 'address');
homeAdd.setAttribute('placeholder', 'home address');
signUpForm.appendChild(homeAdd);

// button attribute
userBtn.setAttribute('type', 'submit');
userBtn.setAttribute('value', 'submit');
btn.appendChild(userBtn);
signUpForm.appendChild(btn);
