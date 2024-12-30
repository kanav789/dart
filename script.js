const carouselTrack = document.querySelector(".carousel-track");
const indicators = document.querySelectorAll(".indicator");
let currentIndex = 0;
const totalImages = carouselTrack.children.length;

// Function to update the carousel position and active indicator
function updateCarousel() {
  const trackWidth = carouselTrack.scrollWidth / totalImages;

  // Move the carousel track to show the current image
  carouselTrack.style.transform = `translateX(-${trackWidth * currentIndex}px)`;

  // Update active indicator
  indicators.forEach((indicator, index) => {
    indicator.classList.remove("active");
    if (index === currentIndex) {
      indicator.classList.add("active");
    }
  });
}

// Function to move to the next slide and reposition for infinite loop
function nextSlide() {
  const trackWidth = carouselTrack.scrollWidth / totalImages;

  // Move the carousel to the next position
  currentIndex++;
  carouselTrack.style.transition = "transform 0.5s ease-in-out";
  carouselTrack.style.transform = `translateX(-${trackWidth * currentIndex}px)`;

  // When the last image moves out, reset to the first image
  if (currentIndex === totalImages) {
    setTimeout(() => {
      carouselTrack.style.transition = "none"; // Disable transition for instant reset
      currentIndex = 0; // Reset to the first image
      carouselTrack.style.transform = `translateX(0)`; // Reset position
    }, 500); // Wait for the transition to complete
  }
}

// Function to move to the previous slide and reposition for infinite loop
function prevSlide() {
  const trackWidth = carouselTrack.scrollWidth / totalImages;

  // Move the carousel to the previous position
  currentIndex--;
  carouselTrack.style.transition = "transform 0.5s ease-in-out";
  carouselTrack.style.transform = `translateX(-${trackWidth * currentIndex}px)`;

  // When the first image moves out, reset to the last image
  if (currentIndex < 0) {
    setTimeout(() => {
      carouselTrack.style.transition = "none"; // Disable transition for instant reset
      currentIndex = totalImages - 1; // Reset to the last image
      carouselTrack.style.transform = `translateX(-${
        trackWidth * currentIndex
      }px)`; // Reset position
    }, 500); // Wait for the transition to complete
  }
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Add event listeners for indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initialize the carousel
updateCarousel();
