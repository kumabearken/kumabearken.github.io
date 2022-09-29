const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const contactform = document.getElementById("sendThis");
const home = document.getElementById("home");
const blog = document.getElementById("blog");
const aboutMe = document.getElementById("aboutMe");
const contact = document.getElementById("contact");
const reserve = document.getElementById("reserve");

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

function closeMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  }
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
home.addEventListener('click', closeMenu,false);
blog.addEventListener('click', closeMenu,false);
aboutMe.addEventListener('click', closeMenu,false);
contact.addEventListener('click', closeMenu,false);
reserve.addEventListener('click', closeMenu,false);