
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
      


const sendEmail = (e) =>{
  e.preventDefault()
if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
  // Add and remove color
  contactMessage.classList.remove('color-blue')
  contactMessage.classList.add('color-red')

  // Show message
  contactMessage.textContent = 'Write all the input fields 📩' 
}else{
  // serviceID - templateID - #form - publicKey
  emailjs.sendForm('service_gw1zydr','template_6yh625m','#contact-form','ITv5xCZtHN42hCZos')
    .then(() =>{
      // Show message and add color
      contactMessage.classList.add('color-blue')
      contactMessage.textContent = 'Message sent ✅'

      // Remove message after three seconds
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 2000);

    }, (error) =>{
      alert('OOPS! SOMETHING HAS FAILED...', error)
    })

  // To clear the input field
  contactName.value = ''
  contactEmail.value = ''
  contactProject.value = ''
}
}
contactForm.addEventListener('submit', sendEmail)




// JavaScript to handle word change
let words = ["Web Developer", "Fresher"];
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