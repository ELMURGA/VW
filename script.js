// ===== DOM Elements =====
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const cookieBanner = document.getElementById('cookie-banner');
const accessibilityToggle = document.getElementById('accessibility-toggle');
const accessibilityPanel = document.getElementById('accessibility-panel');
const accessibilityClose = document.getElementById('accessibility-close');
const contactForm = document.getElementById('contact-form');

// ===== Header Scroll Effect =====
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Show/hide scroll to top button
    if (currentScroll > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }

    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');

    // Animate hamburger to X
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        document.body.style.overflow = 'hidden';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
    }
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
        document.body.style.overflow = '';
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===== Hero Slider =====
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentSlide = 1;
let slideInterval;

function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    currentSlide = n;
    if (currentSlide > slides.length) currentSlide = 1;
    if (currentSlide < 1) currentSlide = slides.length;

    document.querySelector(`[data-slide="${currentSlide}"]`).classList.add('active');
    dots[currentSlide - 1].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 6000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for slider
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlideShow();
        goToSlide(index + 1);
        startSlideShow();
    });
});

// Start automatic slideshow
startSlideShow();

// ===== Model Filters =====
const filterBtns = document.querySelectorAll('.filter-btn');
const modelCards = document.querySelectorAll('.model-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        modelCards.forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);

// ===== Scroll to Top =====
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Cookie Banner =====
function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('hidden');
}

function rejectCookies() {
    localStorage.setItem('cookiesAccepted', 'false');
    cookieBanner.classList.add('hidden');
}

function openCookieSettings() {
    // Could open a modal with detailed settings
    alert('Panel de configuración de cookies - En desarrollo');
}

// Check if cookies were already accepted
if (localStorage.getItem('cookiesAccepted')) {
    cookieBanner.classList.add('hidden');
}

// ===== Accessibility Widget =====
accessibilityToggle.addEventListener('click', () => {
    accessibilityPanel.classList.toggle('active');
});

accessibilityClose.addEventListener('click', () => {
    accessibilityPanel.classList.remove('active');
});

// Close panel when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.accessibility-widget')) {
        accessibilityPanel.classList.remove('active');
    }
});

// Text size controls
let currentFontSize = 100;
const sizeBtns = document.querySelectorAll('.size-btn');

sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.dataset.action;

        if (action === 'increase' && currentFontSize < 150) {
            currentFontSize += 10;
        } else if (action === 'decrease' && currentFontSize > 70) {
            currentFontSize -= 10;
        } else if (action === 'reset') {
            currentFontSize = 100;
        }

        document.documentElement.style.fontSize = `${currentFontSize}%`;
        localStorage.setItem('fontSize', currentFontSize);
    });
});

// Load saved font size
const savedFontSize = localStorage.getItem('fontSize');
if (savedFontSize) {
    currentFontSize = parseInt(savedFontSize);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

// High contrast toggle
const highContrastToggle = document.getElementById('high-contrast');
highContrastToggle.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast', highContrastToggle.checked);
    localStorage.setItem('highContrast', highContrastToggle.checked);
});

// Load saved high contrast setting
if (localStorage.getItem('highContrast') === 'true') {
    highContrastToggle.checked = true;
    document.body.classList.add('high-contrast');
}

// Grayscale toggle
const grayscaleToggle = document.getElementById('grayscale');
grayscaleToggle.addEventListener('change', () => {
    document.body.classList.toggle('grayscale', grayscaleToggle.checked);
    localStorage.setItem('grayscale', grayscaleToggle.checked);
});

// Load saved grayscale setting
if (localStorage.getItem('grayscale') === 'true') {
    grayscaleToggle.checked = true;
    document.body.classList.add('grayscale');
}

// Underline links toggle
const underlineLinksToggle = document.getElementById('underline-links');
underlineLinksToggle.addEventListener('change', () => {
    document.body.classList.toggle('underline-links', underlineLinksToggle.checked);
    localStorage.setItem('underlineLinks', underlineLinksToggle.checked);
});

// Load saved underline links setting
if (localStorage.getItem('underlineLinks') === 'true') {
    underlineLinksToggle.checked = true;
    document.body.classList.add('underline-links');
}

// Pause animations toggle
const pauseAnimationsToggle = document.getElementById('pause-animations');
pauseAnimationsToggle.addEventListener('change', () => {
    document.body.classList.toggle('pause-animations', pauseAnimationsToggle.checked);
    localStorage.setItem('pauseAnimations', pauseAnimationsToggle.checked);

    // Stop slideshow if animations are paused
    if (pauseAnimationsToggle.checked) {
        stopSlideShow();
    } else {
        startSlideShow();
    }
});

// Load saved pause animations setting
if (localStorage.getItem('pauseAnimations') === 'true') {
    pauseAnimationsToggle.checked = true;
    document.body.classList.add('pause-animations');
    stopSlideShow();
}

// ===== Contact Form =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Simple validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Por favor, complete todos los campos obligatorios.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, introduzca un email válido.', 'error');
        return;
    }

    // Privacy checkbox
    if (!data.privacy) {
        showNotification('Debe aceptar la política de privacidad.', 'error');
        return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        showNotification('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ===== Workshop Appointment Form =====
const workshopForm = document.getElementById('workshop-form');
if (workshopForm) {
    workshopForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(workshopForm);
        const data = Object.fromEntries(formData.entries());

        // Validation
        if (!data.name || !data.email || !data.phone || !data.service || !data.location) {
            showNotification('Por favor, complete todos los campos obligatorios.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showNotification('Por favor, introduzca un email válido.', 'error');
            return;
        }

        // Privacy checkbox
        if (!data.privacy) {
            showNotification('Debe aceptar la política de privacidad.', 'error');
            return;
        }

        // Simulate form submission
        const submitBtn = workshopForm.querySelector('button[type="submit"]');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showNotification('¡Cita solicitada correctamente! Te contactaremos para confirmar la fecha y hora.', 'success');
            workshopForm.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }, 2000);
    });

    // Set minimum date to today
    const dateInput = document.getElementById('workshop-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
}

// Notification function
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;

    // Add animation
    const notifStyle = document.createElement('style');
    notifStyle.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(notifStyle);

    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.model-card, .electric-card, .service-card, .after-sales-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSlides = document.querySelectorAll('.hero-slide');

    heroSlides.forEach(slide => {
        if (slide.classList.contains('active')) {
            const bg = slide.querySelector('.hero-bg');
            if (bg) {
                bg.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });
});

// ===== Preloader (Optional) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Console Easter Egg =====
console.log('%c🚗 Volkswagen Sevilla', 'font-size: 24px; font-weight: bold; color: #001e50;');
console.log('%cBienvenido a nuestro concesionario oficial', 'font-size: 14px; color: #00437a;');
console.log('%c📞 Llámanos: 622 309 997', 'font-size: 12px; color: #666;');
