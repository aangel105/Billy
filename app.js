const btnOne = document.querySelector('.btn-one');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close');

btnOne.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// close modal clicking anywhere outside the modal

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
