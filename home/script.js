const body = document.body;
const themeBtn = document.getElementById("themeToggle");
const layoutBtn = document.getElementById("layoutToggle");
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

/* Load saved settings */
if (localStorage.theme === "dark") body.classList.add("dark");
if (localStorage.layout === "hamburger") body.classList.add("hamburger");

/* Theme toggle */
themeBtn.onclick = () => {
  body.classList.toggle("dark");
  localStorage.theme = body.classList.contains("dark") ? "dark" : "light";
};

/* Header layout toggle */
layoutBtn.onclick = () => {
  body.classList.toggle("hamburger");
  localStorage.layout = body.classList.contains("hamburger")
    ? "hamburger"
    : "normal";
};

/* Hamburger menu toggle */
menuBtn.onclick = () => {
  nav.classList.toggle("open");
};
