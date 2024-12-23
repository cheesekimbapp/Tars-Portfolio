// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
  } else{
      header.classList.remove('navbar-fixed');
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
})

// Click outside hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// Check localStorage and system preference for theme
const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Set initial theme based on localStorage or system preference
if (currentTheme === 'dark') {
  html.classList.add('dark');
  darkToggle.checked = true;
} else {
  html.classList.remove('dark');
  darkToggle.checked = false;
}

// Toggle dark mode
darkToggle.addEventListener('click', function () {
if (darkToggle.checked) {
  html.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} else {
  html.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}
});
