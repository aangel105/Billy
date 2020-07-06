const btnOne = document.querySelector(".btn-one");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector("li a");
const menuBg = document.querySelector(".menu-bg");
const formBtn = document.querySelector(".form-btn");
const name = document.querySelector(".name");
const p0ne = document.querySelector(".p-one");

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu

  menu.addEventListener("click", () => {
    console.log("btn-clicked");
    menu.classList.toggle("change");
    navLinks.classList.toggle("change");
    links.classList.toggle("current");
    menuBg.classList.toggle("change-bg");
  });

  btnOne.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Modal

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // // close modal clicking anywhere outside the modal

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Modal Submitted form

  formBtn.addEventListener("click", () => {
    let x = name.value;
    alert(`Hello, ${x}\n\nThank you for booking an appointment at Billy Boy on june 20 2020 at 2:00 PM`);
  });
});
