const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// FAQ

const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';

        // Hide all other answers
        document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

        // Toggle the clicked question's answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});


//review 



// track order
function trackOrder() {
  const trackingNumber = document.getElementById('trackingNumber').value;
  if (trackingNumber) {
      alert(`Tracking Order: ${trackingNumber}`);
  } else {
      alert('Please enter a valid tracking number.');
  }
};