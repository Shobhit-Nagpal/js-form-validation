console.log("Activated js");

const submitBtn = document.getElementById('submitBtn');

const email = document.getElementById('email');
const country = document.getElementById('country');
const zipcode = document.getElementById('zipcode');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password-confirm');

const form = document.getElementById('form');

const passwordMessage = document.createElement('div');

form.addEventListener('submit', (e) => {
    let validate = validateForm();
    let password_match = confirmPassword();

    if (validate === true && password_match === true) {
        alert("Form clicked");
    }
    else {
        alert("Form was filled wrong. Try again")
    }

    e.preventDefault();
})

const validateForm = () => {

    if (!email.checkValidity() || !country.checkValidity() || !zipcode.checkValidity() || !password.checkValidity() || !password_confirm.checkValidity()) {
        return false;
    }

    return true;

}

const confirmPassword = () => {

    if (password.value !== password_confirm.value) {
        passwordMessage.innerHTML = "Password doesn\'t match";
        document.body.appendChild(passwordMessage);
        return false;
    }
    
    return true;

}