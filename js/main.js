const btnCloseModal = document.querySelector("#btnClose");
const popupModalContent = document.querySelector(".popup-modal-content");
const popupModal = document.querySelector(".popup-modal");

btnCloseModal.addEventListener("click", () => {
  console.log("click");
  popupModal.classList.add("disappear");
  popupModalContent.classList.add("disappear");
});
