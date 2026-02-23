// ===================================
// Navegación móvil
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navList.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navList.classList.remove('active');

            // Remover clase active de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));

            // Agregar clase active al enlace clickeado
            this.classList.add('active');
        });
    });

    // ===================================
    // Navegación suave con scroll spy
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function handleScroll() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', handleScroll);

    // ===================================
    // Animaciones al hacer scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos animables
    const animatedElements = document.querySelectorAll('.content-card, .story-box, .tradition-item, .saying-card, .instrument-card, .event-item, .dish-card');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });

    // ===================================
    // Botón volver arriba (añadido dinámicamente)
    // ===================================
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.setAttribute('aria-label', 'Volver arriba');
    document.body.appendChild(scrollToTopButton);

    // Estilos del botón (añadidos dinámicamente)
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #DAA520, #C44536);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 24px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            z-index: 1000;
        }

        .scroll-to-top.visible {
            opacity: 1;
            visibility: visible;
        }

        .scroll-to-top:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(218, 165, 32, 0.5);
        }

        .scroll-to-top:active {
            transform: translateY(-2px);
        }
    `;
    document.head.appendChild(style);

    // Mostrar/ocultar botón según scroll
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    // Funcionalidad del botón
    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===================================
    // Efecto parallax suave en hero
    // ===================================
    const heroSection = document.querySelector('.hero-section');

    if (heroSection) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ===================================
    // Contador animado para eventos próximos
    // ===================================
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // ===================================
    // Easter egg: Efecto especial al hacer triple click en el logo
    // ===================================
    const logoContainer = document.querySelector('.tribal-circle');
    let clickCount = 0;
    let clickTimer;

    if (logoContainer) {
        logoContainer.addEventListener('click', function () {
            clickCount++;

            if (clickCount === 1) {
                clickTimer = setTimeout(() => {
                    clickCount = 0;
                }, 500);
            } else if (clickCount === 3) {
                clearTimeout(clickTimer);
                clickCount = 0;

                // Efecto visual especial
                this.style.animation = 'none';
                setTimeout(() => {
                    this.style.animation = 'pulse 3s ease-in-out infinite, rotate 2s linear';
                }, 10);

                // Mensaje especial
                const blessing = document.createElement('div');
                blessing.textContent = '✨ Que la sabiduría ancestral te acompañe ✨';
                blessing.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: linear-gradient(135deg, #DAA520, #C44536);
                    color: white;
                    padding: 20px 40px;
                    border-radius: 10px;
                    font-size: 1.2rem;
                    font-family: 'Cinzel', serif;
                    z-index: 9999;
                    animation: fadeIn 0.5s ease;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
                `;
                document.body.appendChild(blessing);

                setTimeout(() => {
                    blessing.style.animation = 'fadeOut 0.5s ease';
                    setTimeout(() => blessing.remove(), 500);
                }, 2000);
            }
        });
    }

    // ===================================
    // Efecto de partículas en el fondo (sutil)
    // ===================================
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: radial-gradient(circle, #DAA520, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: 0;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.style.opacity = '0.5';
        }, 100);

        setTimeout(() => {
            particle.remove();
        }, (Math.random() * 10 + 10) * 1000);
    }

    // Añadir estilos de animación para partículas
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0;
            }
            10% {
                opacity: 0.5;
            }
            90% {
                opacity: 0.5;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8);
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Crear partículas periódicamente (con moderación)
    setInterval(createParticle, 5000);

    // ===================================
    // Mensaje de bienvenida en consola
    // ===================================
    console.log('%c🌿 Bienvenido al Territorio Ancestral San Jerónimo 🌿',
        'color: #DAA520; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%cQue la sabiduría de nuestros ancestros ilumine tu camino',
        'color: #8B4513; font-size: 14px; font-style: italic;');

    // ===================================
    // Prevenir comportamiento por defecto en algunos casos
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Offset para el header fijo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Accesibilidad: Focus visible para navegación con teclado
    // ===================================
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('keyboard-navigation');
    });

    // Estilos para navegación con teclado
    const a11yStyle = document.createElement('style');
    a11yStyle.textContent = `
        body:not(.keyboard-navigation) *:focus {
            outline: none;
        }

        .keyboard-navigation *:focus {
            outline: 3px solid #DAA520;
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(a11yStyle);

    // ===================================
    // Performance: Lazy loading para contenido pesado
    // ===================================
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // ===================================
    // Inicialización completa
    // ===================================
    console.log('✅ Página Web del Territorio Ancestral San Jerónimo cargada exitosamente');
});

// ===================================
// Service Worker para PWA (opcional)
// ===================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomentado si decides implementar PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}