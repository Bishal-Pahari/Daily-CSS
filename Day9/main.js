const cm = document.querySelector(".custom-cm");

const showContextMenu = (show = true) => {
  cm.style.display = show ? "block" : "none";
};

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  showContextMenu();
  cm.style.top =
    e.clientY + cm.offsetHeight > window.innerHeight
      ? window.innerHeight - cm.offsetHeight + "px"
      : e.clientY + "px";
  cm.style.left =
    e.clientX + cm.offsetWidth > window.innerWidth
      ? window.innerWidth - cm.offsetWidth + "px"
      : e.clientX + "px";
});

window.addEventListener("click", () => {
  showContextMenu(false);
});
