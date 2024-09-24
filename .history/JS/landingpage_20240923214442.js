document.addEventListener('DOMContentLoaded', () => {
    // 3D Scooter Model
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scooter-3d').appendChild(renderer.domElement);

    // Create a simple cube as a placeholder for the scooter model
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Scooter Card Interaction
    const scooterCards = document.querySelectorAll('.scooter-card');
    scooterCards.forEach(card => {
        card.addEventListener('click', () => {
            const model = card.getAttribute('data-model');
            alert(`You selected the ${model} model. More details coming soon!`);
        });
    });

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});