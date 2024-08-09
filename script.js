// script.js
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Opcional: Auto-slide
setInterval(nextSlide, 5000); // Altere o intervalo conforme necessário
// script.js

// Função para adicionar a classe 'active' ao link correto
function updateNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .nav-link');

    let index = sections.length;

    while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', updateNav);

// Atualiza o nav ao carregar a página
window.addEventListener('load', updateNav);