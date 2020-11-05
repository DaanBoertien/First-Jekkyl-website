const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("site-nav--open");
});
