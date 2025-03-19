document.addEventListener("DOMContentLoaded", () => {
  // AOS init
  AOS.init({
    duration: 800,
    once: true,
  });

  // Smooth scrolling for links with .scrollto
  document.querySelectorAll(".scrollto").forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 70; // 70px offset for sticky nav
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Typed.js
  const typedElem = document.getElementById("typed");
  if (typedElem) {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });
  }
});
