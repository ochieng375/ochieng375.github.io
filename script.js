// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Smooth scroll to the section
        });
    });
});

// Optional: Mobile navigation toggle (requires uncommenting HTML for .burger-menu and its CSS)
/*
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger-menu');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggles a class to show/hide the menu
    });
}
*/

// Simple form submission feedback (client-side only)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission (page reload) for demo

        alert('Message sent! (This is a demo. For a real website, you would integrate a backend service like Formspree, Netlify Forms, or your own server-side script to actually receive messages.)');

        // You would typically send form data to a backend service here, e.g.:
        // fetch('/submit-form', {
        //     method: 'POST',
        //     body: new FormData(e.target)
        // }).then(response => response.json())
        // .then(data => {
        //     alert('Message sent successfully!');
        //     e.target.reset(); // Clear form fields
        // }).catch(error => {
        //     console.error('Form submission error:', error);
        //     alert('Failed to send message. Please try again later.');
        // });
    });
}

