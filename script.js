
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#image-carousel', {
    type: 'loop',
    perPage: 4,
    gap: '20px',
    autoplay: true,
    arrows: false,
    pagination: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    speed: 800,
    breakpoints: {
      1024: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      }
    }
  }).mount();
});



document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const email = document.getElementById("emailInput").value;
  const errorMessage = document.getElementById("error-message");
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please eneter a valid Email address";
  }

  else {
    errorMessage.textContent = "Test submited ";
  }
});



