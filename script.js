window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.opacity = "1";

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});


