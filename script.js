const form = document.getElementById("email-form");
const email = document.getElementById("email");
const small = form.querySelector("small");
const toggle = document.getElementById("toggle");
const toggleIcon = document.getElementById("toggle-icon");
const menu = document.getElementById("menu");

let showMenu = false;

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    toggleIcon.src = "images/icon-close.svg";
    menu.classList.add("show");

    showMenu = true;
  } else {
    toggleIcon.src = "images/icon-hamburger.svg";
    menu.classList.remove("show");

    showMenu = false;
  }
}

// email validation

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess();
  } else {
    showError("Please insert a valid email");
  }
}

// show Error Message
function showError(message) {
  form.classList.add("error");
  small.innerText = message;
}

// show success
function showSuccess() {
  form.className = "email-form";
  small.innerText = "";
  email.value = "";
}

// email submit

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (email.value != "") {
    checkEmail(email);
  } else {
    showError("Email field is empty");
  }
});

// Slideshow

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
    1500: {
      items: 3,
    },
  },
});
