function myFunction() {
  var element = document.getElementById("toggle-delivery");
  element.classList.toggle("toggle-delivery-css");
}

const openModalBtn = document.querySelectorAll(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal-container");

openModalBtn.forEach((openModal) => {
  openModal.addEventListener("click", () => {
    modal.classList.remove("hide");
    modalContainer.classList.remove("hide");
  });
});

closeModal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  },800);
  modalContainer.classList.add("hide");
});

modal.addEventListener("click", () => {
  setTimeout(() => {
    modal.classList.add("hide");
  },800);
  modalContainer.classList.add("hide");
});


var checkboxes = document.querySelectorAll("input[type='checkbox']"),
    submitButt = document.querySelectorAll("input[type='submit']");

checkboxes.click(function() {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
});