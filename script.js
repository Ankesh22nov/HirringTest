

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0; // Current index of the active image
    var images = [
      "img2.jpg",
      "img3.jpg",
    ];
  
    var heroSection = document.querySelector('.hero-section');
    var prevButton = document.getElementById('prevButton');
    var nextButton = document.getElementById('nextButton');
  
    // Function to update the background image
    function updateBackground() {
      heroSection.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }
  
    // Update background on page load
    updateBackground();
  
    // Click event for previous button
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateBackground();
    });
  
    // Click event for next button
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % images.length;
      updateBackground();
    });
  });
  

