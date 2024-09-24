document.addEventListener('DOMContentLoaded', () => {
    const scooterImage = document.querySelector('.scooter-image');
    const featureTags = document.querySelectorAll('.tag');
    const heroElements = document.querySelectorAll('h1, .description, .cta-buttons');
    const nav = document.querySelector('nav');
    
    // Parallax effect on scooter image
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        scooterImage.style.transform = `perspective(1000px) rotateY(${mouseX * 10}deg) rotateX(${-mouseY * 10}deg) scale3d(1.1, 1.1, 1.1)`;
    });

    // Animate hero elements on load
    setTimeout(() => {
        heroElements.forEach(el => el.classList.add('visible'));
        scooterImage.classList.add('visible');
    }, 500);

    // Animate feature tags
    featureTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.classList.add('visible');
        }, 1000 + index * 200);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Change navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Cursor trailer effect
    const trailer = document.createElement('div');
    trailer.classList.add('cursor-trailer');
    document.body.appendChild(trailer);

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX - trailer.offsetWidth / 2;
        const y = e.clientY - trailer.offsetHeight / 2;
        
        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(1)`
        }
        
        trailer.animate(keyframes, { 
            duration: 800, 
            fill: "forwards" 
        });
    });
});
