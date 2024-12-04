/*hamburger*/
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const menuItems = document.querySelectorAll(".menubar a");

/*password*/
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

menuItems.forEach(item => {
  item.addEventListener("click", () => { /*selecciona un item y se cierra */
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  });
});

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