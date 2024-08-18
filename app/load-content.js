// Get the sidebar and content containers
const sidebarContainer = document.getElementById('sidebar-container');
const contentContainer = document.getElementById('content-container');

// Load the sidebar HTML file
const sidebarRequest = new XMLHttpRequest();
sidebarRequest.open('GET', 'sidebar.html', true);
sidebarRequest.onload = function() {
  if (sidebarRequest.status >= 200 && sidebarRequest.status < 400) {
    sidebarContainer.innerHTML = sidebarRequest.responseText;
  } else {
    console.error('Error loading sidebar HTML file');
  }
};
sidebarRequest.onerror = function() {
  console.error('Error loading sidebar HTML file');
};
sidebarRequest.send();


// load content HTML files
function loadPage(pageName) {
  fetch(pageName)
    .then(response => {
      if (!response.ok) {
        throw new Error('Page not found');
      }
      return response.text();
    })
    .then(html => {
      contentContainer.innerHTML = html;
      highlightCurrentPage(pageName);
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });
}


function highlightCurrentPage(pageName) {
  // Remove 'active' class from all links
  document.querySelectorAll('.sidebar li a').forEach(link => {
    link.classList.remove('active');
  });

  // Add 'active' class to the link corresponding to the current page
  const linkId = 'link' + pageName.replace('.html', '');
  document.getElementById(linkId).classList.add('active');
  console.log('Altered link:', linkId);
}


// Load a default HTML file when the page loads
window.onload = function() {
  loadPage('content/home/main.html'); 
};

