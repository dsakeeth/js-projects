const generatePasswordButton = document.querySelector(".GeneratePassword");
const generatedPasswordField = document.querySelector("#generated-Password");
const copyGpButton = document.querySelector('.password-generator .fa-copy');
const copyCpButton = document.querySelector('.password-checker .fa-copy');
const passwordToCheckField = document.querySelector("#password-tocheck");
const message = document.querySelector('.message')
const checkPasswordButton = document.querySelector('.checkPassword');

const generatePasswords = () => {
    let pass = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+=-[]{}/?><,.|';
    for (let i = 0; i < 12; i++) {
        pass += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return pass;
};

generatePasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    generatedPasswordField.value = generatePasswords();
});

checkPasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    passwordStrength();
});

copyGpButton.addEventListener('click', (e) => {
    e.preventDefault();
    copyToClipboard(generatedPasswordField.value);
});

copyCpButton.addEventListener('click', (e) => {
    e.preventDefault();
    copyToClipboard(passwordToCheckField.value);
});

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

const passwordStrength = () => {
    let strength = 0;
    let password = passwordToCheckField.value;

    if (password.length < 12) {
        message.textContent = "Password requires a minimum of 12 characters.";
        message.style.color = "red";
        return;
    }

    if (/[a-z]/.test(password)) {
        strength += 1;
    }
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }
    if (/\d/.test(password)) {
        strength += 1;
    }
    if (/[^a-zA-Z\d]/.test(password)) {
        strength += 2;
    }

    if (strength <= 2) {
        message.textContent = "Weak password. Try adding uppercase letters, numbers, and special characters.";
        message.style.color = "orange";
    } else if (strength === 3) {
        message.textContent = "Moderate password. Consider adding more special characters.";
        message.style.color = "yellow";
    } else if (strength >= 4) {
        message.textContent = "Strong password!";
        message.style.color = "green";
    }
};

