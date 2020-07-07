const btnOne = document.querySelector(".btn-one");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector(".close");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector("li a");
const menuBg = document.querySelector(".menu-bg");
const formBtn = document.querySelector(".form-btn");
const nameOne = document.querySelector("#name");
const modalForm = document.querySelector(".modal-form");

document.addEventListener("DOMContentLoaded", () => {
  // Hamburger menu

  if (menu) {
    menu.addEventListener("click", () => {
      console.log("btn-clicked");
      menu.classList.toggle("change");
      navLinks.classList.toggle("change");
      menuBg.classList.toggle("change-bg");
    });
  }

  if (btnOne) {
    btnOne.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }

  // Modal

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // close modal clicking anywhere outside the modal

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Modal Submitted form
  if (formBtn) {
    formBtn.addEventListener("click", (e) => {
      console.log("form was submitted!!");
      // modalForm.reset();
    });
  }
});
