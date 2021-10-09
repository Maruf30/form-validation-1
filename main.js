const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-pass');
const passwordStrength = document.getElementById("password-strength");

// ================ for error message ================
const userMessage = document.getElementById("user-msg");
const emailMessage = document.getElementById("email-msg");
const passwordMessage = document.getElementById("password-msg");
const confirmMessage = document.getElementById("confirmPass-msg");

// ==================== password strength ==============================
password.addEventListener("input", () => {
    if (password.value.length < 4) {
        passwordMessage.className = "form-controls weak";
        passwordStrength.innerText = "password is weak"
    } else if (password.value.length <= 4 && password.value.length < 8) {
        passwordMessage.className = "form-controls medium";
        passwordStrength.innerText = "password is medium"
    } else if (password.value.length >= 8) {
        passwordMessage.className = "form-controls strong";
        passwordStrength.innerText = "password is strong"
    }
})

// ==================== form submit ==============================
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // -----------------------------Username-----------------------
    if (username.value === "") {
        userMessage.className = "form-controls error";
    } else {
        userMessage.className = "form-controls success";
    }
    // ---------------------------Email---------------------------
    if (email.value === "") {
        emailMessage.className = "form-controls error";
    } else {
        emailMessage.className = "form-controls success";
    }
    // --------------------------Password--------------------------
    if (password.value === "") {
        passwordMessage.className = "form-controls error";
        passwordStrength.innerText = "password is empty"
    } else {
        passwordMessage.className = "form-controls success";
    }

    // --------------------Confirm Password-------------------------
    if ((password.value === "") || password.value !== confirmPass.value) {
        confirmMessage.className = "form-controls error";
    } else {
        confirmMessage.className = "form-controls success";
    }

})


