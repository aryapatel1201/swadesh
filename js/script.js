document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.href;
   
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
   
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });
   
    navLinks.forEach(function (link) {
      if (link.href === currentPage) {
        link.classList.add("active");
      }
    });
  });