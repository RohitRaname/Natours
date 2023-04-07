// if (
//   (navigator.userAgent.indexOf("Opera") ||
//     navigator.userAgent.indexOf("OPR")) != -1
// ) {
// } else if (navigator.userAgent.indexOf("Edg") != -1) {
// } else if (navigator.userAgent.indexOf("Chrome") != -1) {
//   document.querySelector("html").style.fontSize = "78.125%";
// } else if (navigator.userAgent.indexOf("Safari") != -1) {
// } else if (navigator.userAgent.indexOf("Firefox") != -1) {
//   console.log("hello firefox");
// } else if (
//   navigator.userAgent.indexOf("MSIE") != -1 ||
//   !!document.documentMode == true
// ) {
//   //IF IE > 10
// } else {
// }

const body = document.querySelector("body");
const navSection = document.querySelector(".nav");
const navOpenCloseBtn = document.querySelector(".nav__radio-button");
const modalSection = document.querySelector(".cta");
const modalCloseBtn = document.querySelector(".cta__close-btn");
const bookTour = document.querySelector("#book__tour");
const modalBackground = document.querySelector(".cta__overlay");

navOpenCloseBtn.addEventListener("click", function () {
  navSection.classList.toggle("nav__toggle");
});

modalCloseBtn.addEventListener("click", function () {
  modalSection.classList.toggle("hide");
  body.classList.toggle("padding-0");
});

bookTour.addEventListener("click", function () {
  modalSection.classList.toggle("hide");
  body.classList.toggle("padding-0");
});

modalBackground.addEventListener("click", function () {
  modalSection.classList.toggle("hide");
});
// setTimeout(function () {
//   modalSection.classList.toggle("hide");
// }, 3000);

// phone skew more space
