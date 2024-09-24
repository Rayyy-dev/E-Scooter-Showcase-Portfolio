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

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Testimonials
    const testimonials = [
        {
            name: "John Doe",
            image: "assets/testimonial1.jpg",
            text: "E-Scoot has completely changed my daily commute. It's fast, eco-friendly, and so much fun!"
        },
        {
            name: "Jane Smith",
            image: "assets/testimonial2.jpg",
            text: "I love how easy it is to zip around the city with my E-Scoot. It's the perfect urban transportation solution."
        },
        // Add more testimonials as needed
    ];

    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');
        testimonialElement.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <p>${testimonial.text}</p>
            <h4>${testimonial.name}</h4>
        `;
        testimonialSlider.appendChild(testimonialElement);
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});