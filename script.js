const barIcon = document.querySelector(".hamburgerIcon");
const submenu = document.querySelector(".side_menu");
const closeIcon = document.querySelector(".fa-xmark");

barIcon.addEventListener("click", () => {
  submenu.classList.add("active");
  submenu.style.display="block"
  barIcon.style.display="none"
});

closeIcon.addEventListener("click", () => {
  submenu.classList.remove("active");
  submenu.style.display="none"
  barIcon.style.display="block"
});
