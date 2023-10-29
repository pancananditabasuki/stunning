// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika stunning menu di klik
document.querySelector("#stunning-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const stunning = document.querySelector("#stunning-menu");

document.addEventListener("click", function (e) {
  if (!stunning.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
