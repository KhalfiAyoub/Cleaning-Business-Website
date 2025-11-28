
// Fonction pour afficher/masquer le menu mobile
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Fonction pour les animations au défilement
function revealOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
            element.classList.add('is-visible');
        }
    });
}

// Effet de défilement sur l'en-tête
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Gestion du bouton de retour en haut
function handleScrollTopButton() {
    const scrollTop = document.getElementById('scrollTop');
    if (window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
}

// Fonction pour remonter en haut de la page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Gestion de la soumission du formulaire
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
    this.reset();
    
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
});

// Défilement fluide pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// Écouteurs d'événements
window.addEventListener('scroll', () => {
    revealOnScroll();
    handleHeaderScroll();
    handleScrollTopButton();
});

window.addEventListener('load', revealOnScroll);
