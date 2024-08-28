console.log('Menu Icon Clicked');

// Menu Icon and Overlay Menu
const menuIcon = document.querySelector('.menuIcon');
const overlayMenu = document.querySelector('.overlay-menu');
const navbar = document.getElementById('navbar');
const navbarbackground = document.getElementById('navbar-background');
let lastScrollTop = 0; // Initialize lastScrollTop

// Toggle Menu Icon
menuIcon.addEventListener('click', () => {
  console.log('Menu Icon Clicked'); // Log when the menu icon is clicked
  menuIcon.classList.toggle('toggle');
  if (menuIcon.classList.contains('toggle')) {
    overlayMenu.style.transform = 'translateX(0)';
    overlayMenu.style.zIndex = '90'; // Ensure menu is above other content
  } else {
    overlayMenu.style.transform = 'translateX(-100%)';
    overlayMenu.style.zIndex = ''; // Reset z-index
  }
});

// Scroll Down/Up Logic
window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  console.log('Current Scroll Position:', currentScroll); // Log current scroll position
  console.log('Last Scroll Position:', lastScrollTop); // Log last scroll position

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
    navbarbackground.classList.add('hidden');
    menuIcon.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
    navbarbackground.classList.remove('hidden');
    menuIcon.classList.remove('hidden');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggle-mode');
  
  // Function to toggle between light and dark mode
  function toggleMode() {
      if (document.body.classList.contains('light-mode')) {
          document.body.classList.remove('light-mode');
          document.body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark-mode');
          document.body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
      }
  }

  // Apply saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(savedTheme);
  }

  // Apply dark mode from post parameter
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
  }

  // Add event listener to the toggle button
  toggleButton.addEventListener('click', toggleMode);
});

