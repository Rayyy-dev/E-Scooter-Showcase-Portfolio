document.addEventListener('DOMContentLoaded', () => {
    const scooterImage = document.querySelector('.scooter-image');
    const featureTags = document.querySelectorAll('.tag');
    
    // Parallax effect on scooter image
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        scooterImage.style.transform = `perspective(1000px) rotateY(${mouseX * 10}deg) rotateX(${-mouseY * 10}deg) scale3d(1.1, 1.1, 1.1)`;
    });

    // Animate feature tags
    featureTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 500 + index * 200);
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
});
