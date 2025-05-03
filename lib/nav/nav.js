const toggleButton = document.getElementById('darkModeToggle');

const body = document.body;


// Load saved mode from localStorage

if (localStorage.getItem('dark-mode') === 'enabled') {

  body.classList.add('dark-mode');

  toggleButton.textContent = '☀️';

  document.querySelector('.navbar').classList.remove('navbar-light', 'bg-light');

  document.querySelector('.navbar').classList.add('navbar-dark');

}


toggleButton.addEventListener('click', () => {

  body.classList.toggle('dark-mode');

  const navbar = document.querySelector('.navbar');

  if (body.classList.contains('dark-mode')) {

    toggleButton.textContent = '☀️';

    navbar.classList.remove('navbar-light', 'bg-light');

    navbar.classList.add('navbar-dark');

    localStorage.setItem('dark-mode', 'enabled');

  } else {

    toggleButton.textContent = '🌙';

    navbar.classList.add('navbar-light', 'bg-light');

    navbar.classList.remove('navbar-dark');

    localStorage.setItem('dark-mode', 'disabled');

  }

});
