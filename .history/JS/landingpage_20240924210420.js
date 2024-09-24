document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navRight.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
        }
    });

    gsap.from('.hero-image', {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
            trigger: '#hero',
            start: 'top center',
        }
    });

    // Features section animation
    gsap.from('.feature-item', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#features',
            start: 'top center+=100',
        }
    });

    // Form submission
    const testRideForm = document.getElementById('test-ride-form');
    testRideForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for booking a test ride. We will contact you shortly!');
        testRideForm.reset();
    });
});