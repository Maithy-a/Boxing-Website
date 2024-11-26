// Close navbar on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            // Hide the navigation
            const toggler = document.querySelector('.navbar-toggler');
            toggler.click(); // Simulate a toggle button click to close
        }
    });
});

// Smooth scroll to the next section
document.getElementById("scrollIcon").addEventListener("click", function () {
    const nextSection = document.getElementById("About");
    nextSection.scrollIntoView({ behavior: "smooth" });
});


// Detect when the user scrolls into and out of the #Home section
window.addEventListener("scroll", function() {
    let navbar = document.querySelector('.navbar');
    let homeSection = document.getElementById('Home');
    
    // Get the distance from the top of the page to the top of the Home section
    let homeSectionOffset = homeSection.offsetTop;
    
    // If the user scrolls past the Home section, apply the 'black-background' class to the navbar
    if (window.scrollY >= homeSectionOffset) {
      navbar.classList.add('black-background');
    } else {
      navbar.classList.remove('black-background');
    }
  });

  // Optional: Keep the navbar black when toggled, regardless of scroll position
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', function() {
    let navbar = document.querySelector('.navbar');
    navbar.classList.add('black-background');
  });