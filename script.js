/* menu icon navbar */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {

    menuIcon.classList.toggle('bx-x');
    
    navbar.classList.toggle('active');
  });
}




const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.id;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`header nav a[href*=${id}]`)?.classList.add('active');
    }
  });

  header.classList.toggle('sticky', top > 0);

  menuIcon?.classList.remove('bx-x');
  navbar?.classList.remove('active');
});






/* swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* dark light mode */
// let darkModeIcon = document.querySelector('#darkMode-icon');

// darkModeIcon.onclick = () => {
//     darkModeIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
// };


/* scroll reveal */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .projects-box, .contact form, .interships-container', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });



// send email 

function sendEmail() {
    Email.send({
        SecureToken: "6874583004e1-4c45-873e-7a47ab97ead1",
        To: 'mkanaskhan9921@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
        Body: "Name: " + document.getElementById('name').value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Email Subject: " + document.getElementById("subject").value
            + "<br>  Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully")
    );
}