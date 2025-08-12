// Smooth scroll + active nav link
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      navLinks.forEach(l => l.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });

  // update active link on scroll
  const sections = Array.from(document.querySelectorAll("section, header"));
  window.addEventListener("scroll", () => {
    const pos = window.scrollY + window.innerHeight * 0.35;
    for (let s of sections) {
      const top = s.offsetTop;
      const bottom = top + s.offsetHeight;
      const id = s.id || "home";
      const link = document.querySelector('.nav-link[href="#' + id + '"]');
      if (pos >= top && pos < bottom) {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        if (link) link.classList.add("active");
      }
    }
  });

  // mobile menu toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinksWrap = document.querySelector(".nav-links");
  menuBtn.addEventListener("click", () => {
    navLinksWrap.style.display = navLinksWrap.style.display === "flex" ? "none" : "flex";
    navLinksWrap.style.flexDirection = "column";
    navLinksWrap.style.background = "linear-gradient(180deg, rgba(2,8,15,0.95), rgba(2,8,15,0.9))";
    navLinksWrap.style.padding = "12px";
    navLinksWrap.style.position = "absolute";
    navLinksWrap.style.right = "20px";
    navLinksWrap.style.top = "56px";
  });
});