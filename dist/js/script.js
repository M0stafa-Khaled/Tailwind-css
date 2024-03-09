let navMenu = document.getElementById("nav-menu");
let mobileMenu = document.getElementById("mobile-menu");

navMenu.addEventListener("click", () => {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
  } else {
    mobileMenu.classList.remove("flex");
    mobileMenu.classList.add("hidden");
  }
});

// copyright
document.querySelector(".year").innerHTML = new Date().getFullYear();
