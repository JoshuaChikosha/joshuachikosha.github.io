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
        const offsetTop = target.offsetTop - 60; // offset for navbar
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

  // Projects: "Show more" / "Show fewer" label + refresh AOS when expanded
  const projectsMoreEl = document.getElementById("projectsMore");
  const projectsExpandLabel = document.getElementById("projectsExpandLabel");
  if (projectsMoreEl && projectsExpandLabel) {
    projectsMoreEl.addEventListener("shown.bs.collapse", () => {
      projectsExpandLabel.innerHTML =
        '<i class="bi bi-chevron-up me-1"></i>Show fewer projects';
      if (typeof AOS !== "undefined") AOS.refresh();
    });
    projectsMoreEl.addEventListener("hidden.bs.collapse", () => {
      projectsExpandLabel.innerHTML =
        '<i class="bi bi-chevron-down me-1"></i>Show more projects';
    });
  }
});
