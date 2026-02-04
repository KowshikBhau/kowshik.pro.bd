const themeBtn = document.getElementById('theme-btn');
const langBtn = document.getElementById('lang-btn');
const body = document.body;

// Theme Toggle
themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
});

// Language Toggle
langBtn.addEventListener('click', () => {
    body.classList.toggle('bn-mode');
    langBtn.innerText = body.classList.contains('bn-mode') ? "EN" : "BN";
});
