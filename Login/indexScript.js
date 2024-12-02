
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const form = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

/**
 * NAV BAR
 */
const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



/**
 * PASSWORD
 */

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