/* Geunhyuk Youk — personal page scripts */

// ---------- Theme toggle ----------
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// ---------- Mobile menu ----------
const burger = document.getElementById("nav-burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// ---------- Reveal on scroll ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- Active nav link while scrolling ----------
const sections = document.querySelectorAll("main section[id]");
const linkById = {};
document.querySelectorAll(".nav-link").forEach((link) => {
  linkById[link.getAttribute("href").slice(1)] = link;
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      const link = linkById[entry.target.id];
      if (!link) continue;
      if (entry.isIntersecting) {
        document.querySelectorAll(".nav-link.active").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    }
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach((s) => sectionObserver.observe(s));

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
