document.addEventListener('DOMContentLoaded', () => {
    const productImg = document.getElementById('product-img');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const prevImgBtn = document.getElementById('prev-img');
    const nextImgBtn = document.getElementById('next-img');

    const products = [
        { 
            name: 'E-Scooter Model X', 
            price: '$999.99', 
            image: 'e-scooter-1.jpg',
            description: 'Experience the future of urban mobility with our cutting-edge e-scooter.'
        },
        { 
            name: 'E-Scooter Model Y', 
            price: '$1,199.99', 
            image: 'e-scooter-2.jpg',
            description: 'Sleek design meets powerful performance in our premium e-scooter model.'
        },
        { 
            name: 'E-Scooter Model Z', 
            price: '$1,499.99', 
            image: 'e-scooter-3.jpg',
            description: 'The ultimate e-scooter for those who demand the very best in technology and style.'
        },
    ];

    let currentProductIndex = 0;

    function updateProduct() {
        const currentProduct = products[currentProductIndex];
        productImg.src = currentProduct.image;
        productName.textContent = currentProduct.name;
        productPrice.textContent = currentProduct.price;
        productDescription.textContent = currentProduct.description;
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});