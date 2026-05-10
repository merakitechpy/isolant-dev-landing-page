/* ============================================
   ISOLANT PARAGUAY - JS principal
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // 1. SLIDER (hero)
  // ============================================
  const slider = document.getElementById('hero-slider');
  if (slider) {
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    const prevBtn = slider.querySelector('.slider-arrow.prev');
    const nextBtn = slider.querySelector('.slider-arrow.next');
    let currentSlide = 0;
    let autoPlayInterval;
    const AUTOPLAY_DELAY = 6000;

    function showSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
      dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
      currentSlide = index;
    }

    function nextSlide() {
      showSlide((currentSlide + 1) % slides.length);
    }
    function prevSlide() {
      showSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(nextSlide, AUTOPLAY_DELAY);
    }
    function stopAutoPlay() {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => { showSlide(i); startAutoPlay(); });
    });

    // Pausar al hover
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);

    // Swipe táctil
    let touchStartX = 0;
    slider.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    slider.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].screenX - touchStartX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? prevSlide() : nextSlide();
        startAutoPlay();
      }
    }, { passive: true });

    startAutoPlay();
  }

  // ============================================
  // 2. MENÚ MÓVIL
  // ============================================
  const hamburger = document.querySelector('.hamburger-btn');
  const mainNav = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer click en un link
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================
  // 3. SCROLL ANIMATIONS (fade-in al hacer scroll)
  // ============================================
  const animatedSelectors = [
    '.about-text',
    '.about-image',
    '.product-card',
    '.stat',
    '.contact-info',
    '.contact-form'
  ];

  const animatedEls = document.querySelectorAll(animatedSelectors.join(','));
  animatedEls.forEach(el => el.classList.add('fade-in'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Pequeño delay escalonado para varios elementos visibles a la vez
          setTimeout(() => entry.target.classList.add('is-visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    animatedEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar todo
    animatedEls.forEach(el => el.classList.add('is-visible'));
  }

  // ============================================
  // 4. AÑO ACTUAL EN FOOTER
  // ============================================
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ============================================
  // 5. SCROLL SUAVE EN ENLACES INTERNOS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });
})();

// ============================================
// 6. FORMULARIO DE CONTACTO (mailto fallback)
// ============================================
function sendContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim();
  const subject = form.subject.value.trim() || 'Consulta desde el sitio web';
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Por favor completá los campos obligatorios.');
    return;
  }

  const body = `Hola, soy ${name}.\n\n${message}\n\n---\nNombre: ${name}\nEmail: ${email}${phone ? '\nTeléfono: ' + phone : ''}`;
  const mailtoLink = `mailto:ventas@isolant.com.py?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;
}
