'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const skillIcons = document.querySelectorAll('.skill-icon');
const container = document.getElementById('skills-container');

function randomizePosition() {
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  skillIcons.forEach((icon) => {
    const randomX = Math.floor(Math.random() * (containerWidth - icon.offsetWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - icon.offsetHeight));
    
    icon.style.left = randomX + 'px';
    icon.style.top = randomY + 'px';
  });
}

// Call randomizePosition when the page loads
window.onload = randomizePosition;

// Optionally, randomize again on window resize
window.onresize = randomizePosition;
