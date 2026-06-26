const header = document.querySelector(".site-header");
const anchorLinks = document.querySelectorAll('a[href^="#"]');

const updateHeaderState = () => {
  document.body.classList.toggle("menu-scrolled", window.scrollY > 10);
};

anchorLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", targetId);
  });
});

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
