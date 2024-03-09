// scripts.js

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    // Show the selected page
    const selectedPage = document.getElementById(`${pageId}Page`);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    }
  }
  