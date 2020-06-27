const btnOne = document.querySelector(".btn-one");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const menuBg = document.querySelector(".menu-bg");

btnOne.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// close modal clicking anywhere outside the modal

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Hamburger menu

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navLinks.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
});
