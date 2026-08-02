document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const showSignup = document.getElementById('showSignup');
  const showLogin = document.getElementById('showLogin');
  const loginButton = document.getElementById('loginButton');
  const signupFormEl = signupForm.querySelector('form');

  showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
  });

  showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
  });

  loginButton.addEventListener('click', () => {
    const inputs = loginForm.querySelectorAll('input');
    const [email, password] = inputs;

    if (!email.value.trim() || !password.value.trim()) {
      flash(loginButton, 'Fill in both fields');
      return;
    }
    if (!email.value.includes('@')) {
      flash(loginButton, 'Enter a valid email');
      return;
    }

    localStorage.setItem('newstep_logged_in', 'true');
    loginButton.textContent = 'Redirecting...';
    setTimeout(() => { window.location.href = 'dashboard.html'; }, 500);
  });

  signupFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = signupFormEl.querySelector('button');
    const inputs = signupFormEl.querySelectorAll('input');
    const [name, email, password, confirm] = inputs;

    if (!name.value.trim() || !email.value.trim() || !password.value.trim()) {
      flash(submitBtn, 'Fill in all fields');
      return;
    }
    if (password.value !== confirm.value) {
      flash(submitBtn, "Passwords don't match");
      return;
    }

    localStorage.setItem('newstep_logged_in', 'true');
    submitBtn.textContent = 'Creating account...';
    setTimeout(() => { window.location.href = 'profile.html'; }, 500);
  });

  function flash(button, message) {
    const original = button.textContent;
    button.textContent = message;
    button.style.background = '#c1546b';
    setTimeout(() => {
      button.textContent = original;
      button.style.background = '';
    }, 1800);
  }
});