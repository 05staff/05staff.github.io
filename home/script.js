const root = document.documentElement;

const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const headerNav = document.getElementById('headerNav');
const footerBtn = document.querySelector('.footer-btn');

/* ===== THEME ===== */
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);

if (themeToggle) {
  themeToggle.onclick = () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };
}

/* ===== MENU STYLE ===== */
let menuStyle = localStorage.getItem('menuStyle') || 'header';

function applyMenuStyle() {
  if (!menuBtn || !headerNav) return;

  if (menuStyle === 'hamburger') {
    menuBtn.style.display = 'flex';
    headerNav.style.display = 'none';
  } else {
    menuBtn.style.display = 'none';
    headerNav.style.display = 'flex';
    if (sideNav) sideNav.classList.remove('active');
  }
}

if (menuToggle) {
  menuToggle.onclick = () => {
    menuStyle = menuStyle === 'header' ? 'hamburger' : 'header';
    localStorage.setItem('menuStyle', menuStyle);
    applyMenuStyle();
  };
}

if (menuBtn && sideNav) {
  menuBtn.onclick = () => {
    sideNav.classList.toggle('active');
  };
}

/* ===== FOOTER BUTTON ===== */
if (footerBtn) {
  footerBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

applyMenuStyle();
