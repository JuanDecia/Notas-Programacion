const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("change", function () {
  const contLink = document.querySelector(".cont-link");

  if (this.checked) {
    contLink.style.maxHeight = contLink.scrollHeight + "px";
  } else {
    contLink.style.maxHeight = "0";
  }
});
