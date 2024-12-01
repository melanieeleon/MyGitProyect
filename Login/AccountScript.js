const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

  form.addEventListener('submit', (event) => {
    const password = passwordInput.value;
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regex.test(password)) {
      event.preventDefault(); // Evita el envío del formulario
      passwordError.style.display = 'inline';
    } else {
      passwordError.style.display = 'none';
    }
  });