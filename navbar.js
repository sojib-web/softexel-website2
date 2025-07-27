// navbar.js

function initializeNavbar() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const servicesBtn = document.getElementById("services-button");
  const servicesDropdown = document.getElementById("services-dropdown");

  let dropdownTimeout;

  const showDropdown = () => {
    clearTimeout(dropdownTimeout);
    servicesDropdown.classList.remove("hidden");
  };

  const hideDropdown = () => {
    dropdownTimeout = setTimeout(() => {
      servicesDropdown.classList.add("hidden");
    }, 200);
  };

  if (servicesBtn && servicesDropdown) {
    servicesBtn.addEventListener("mouseenter", showDropdown);
    servicesBtn.addEventListener("mouseleave", hideDropdown);
    servicesDropdown.addEventListener("mouseenter", showDropdown);
    servicesDropdown.addEventListener("mouseleave", hideDropdown);
  }
}

