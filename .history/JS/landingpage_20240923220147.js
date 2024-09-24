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

    // Product Showcase
    const productImg = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const prevImgBtn = document.getElementById('prev-img');
    const nextImgBtn = document.getElementById('next-img');

    const products = [
        { name: 'E-Scooter Model X', price: '$999.99', image: 'e-scooter-1.jpg' },
        { name: 'E-Scooter Model Y', price: '$1,199.99', image: 'e-scooter-2.jpg' },
        { name: 'E-Scooter Model Z', price: '$1,499.99', image: 'e-scooter-3.jpg' },
    ];

    let currentProductIndex = 0;

    function updateProduct() {
        const currentProduct = products[currentProductIndex];
        productImg.src = currentProduct.image;
        productName.textContent = currentProduct.name;
        productPrice.textContent = currentProduct.price;
    }

    prevImgBtn.addEventListener('click', () => {
        currentProductIndex = (currentProductIndex - 1 + products.length) % products.length;
        updateProduct();
    });

    nextImgBtn.addEventListener('click', () => {
        currentProductIndex = (currentProductIndex + 1) % products.length;
        updateProduct();
    });

    // Initialize with the first product
    updateProduct();
});