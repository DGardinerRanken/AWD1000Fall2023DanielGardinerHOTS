"use strict"

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "admin@example.com" && password === "password") {
        loginSuccessMsg.style.opacity = 1;
        loginErrorMsg.style.opacity = 0;
    } else {
        loginErrorMsg.style.opacity = 1;
        loginSuccessMsg.style.opacity = 0;
    }
})
