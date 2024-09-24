document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('#hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - header.offsetHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});