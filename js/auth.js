const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

showSignup.addEventListener("click", function (e) {
    e.preventDefault();

    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

showLogin.addEventListener("click", function (e) {
    e.preventDefault();

    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

// Login Button

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    window.location.href = "dashboard.html";

});