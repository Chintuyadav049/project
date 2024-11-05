document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const contactButton = document.getElementById('contact-button');
    const loginModal = document.getElementById('login');
    const registerModal = document.getElementById('register');
    const contactModal = document.getElementById('contact');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    // Fetch products from the backend
    fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `<strong>${product.name}</strong><p>${product.price}</p>`;
                productList.appendChild(productDiv);
            });
        });

    // Show modals
    [loginButton, registerButton, contactButton].forEach((button, index) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            if (index === 0) loginModal.style.display = 'flex';
            else if (index === 1) registerModal.style.display = 'flex';
            else contactModal.style.display = 'flex';
        });
    });

    // Close modals
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
            contactModal.style.display = 'none';
        });
    });

    // Image slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-index'));
            showSlide(currentSlide);
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('.slides img');
        images.forEach(img => {
            img.classList.add('animate');
        });
    });
    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});
