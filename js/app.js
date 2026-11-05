// 1. Grab the elements we need
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');


// 2. A function that shows one page and hides the rest
function showPage(pageId) {
  pages.forEach(page => {
    page.classList.toggle('active', page.id === pageId);
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
}

// 3. Listen for clicks on each menu link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();          // stop the link from jumping to the top
    showPage(link.dataset.page);     // read the data-page value
  });
});

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.toggle('active', page.id === pageId);
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  localStorage.setItem('currentPage', pageId);   // new line
}

const savedPage = localStorage.getItem('currentPage') || 'dashboard';
showPage(savedPage);