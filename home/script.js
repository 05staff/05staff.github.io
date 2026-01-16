const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');
const headerNav = document.getElementById('headerNav');

/* ===== THEME ===== */
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);

themeToggle.onclick = () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
};

/* ===== MENU STYLE ===== */
let menuStyle = localStorage.getItem('menuStyle') || 'header';

function applyMenuStyle() {
  if (menuStyle === 'hamburger') {
    menuBtn.style.display = 'flex';
    headerNav.style.display = 'none';
  } else {
    menuBtn.style.display = 'none';
    headerNav.style.display = 'flex';
    sideNav.classList.remove('active');
  }
}

menuToggle.onclick = () => {
  menuStyle = menuStyle === 'header' ? 'hamburger' : 'header';
  localStorage.setItem('menuStyle', menuStyle);
  applyMenuStyle();
};

menuBtn.onclick = () => {
  sideNav.classList.toggle('active');
};

/* ===== FOOTER BUTTON ===== */
document.querySelector('.footer-btn').onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


applyMenuStyle();
