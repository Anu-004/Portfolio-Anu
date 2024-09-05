/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactProject = document.getElementById("contact-project"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    // Add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    // Show message
    contactMessage.textContent = "Write all the input fields 📩";
  } else {
    // serviceID - templateID - #form - publicKey
    emailjs
      .sendForm(
        "service_gw1zydr",
        "template_6yh625m",
        "#contact-form",
        "ITv5xCZtHN42hCZos"
      )
      .then(
        () => {
          // Show message and add color
          contactMessage.classList.add("color-blue");
          contactMessage.textContent = "Message sent ✅";

          // Remove message after three seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 2000);
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );

    // To clear the input field
    contactName.value = "";
    contactEmail.value = "";
    contactProject.value = "";
  }
};
contactForm.addEventListener("submit", sendEmail);

// JavaScript to handle word change
let words = ["Web Developer", "Frontend Enthusiast"];
let currentIndex = 0;

function changeWord() {
  const wordElement = document.getElementById("changing-word");

  // Fade out
  wordElement.style.opacity = 0;

  // Wait for the fade out to complete
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length;
    wordElement.textContent = words[currentIndex];

    // Fade in
    wordElement.style.opacity = 1;
  }, 500); // Match this timeout with the CSS transition duration
}

// Change word every 2 seconds (2000ms)
setInterval(changeWord, 1900);

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true // Animations repeat
})

sr.reveal(`.abt, .education, .prj, .contact-form`)
sr.reveal(`.profile`, {delay: 600, origin: 'bottom', interval: 100})
// sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
// sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.education, .abt`, {interval: 100})