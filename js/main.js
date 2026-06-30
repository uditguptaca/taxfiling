// ============================================
// TAX FILINGS CANADA — MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileMenu();
  initScrollAnimations();
  initBackToTop();
  initFaqAccordion();
  initStatsCounter();
  initReviewsCarousel();
  initReviewsSlider();
  initLocationAccordion();
});

// ── Sticky Header ─────────────────────────
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// ── Mobile Menu ───────────────────────────
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Handle dropdown toggles on mobile
  const dropdownParents = nav.querySelectorAll('li');
  dropdownParents.forEach(item => {
    const link = item.querySelector(':scope > a');
    const dropdown = item.querySelector('.dropdown, .mega-menu');
    if (!dropdown || !link) return;

    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        item.classList.toggle('open');
        // Close siblings
        dropdownParents.forEach(sibling => {
          if (sibling !== item) sibling.classList.remove('open');
        });
      }
    });
  });

  // Close menu on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && !link.nextElementSibling) {
        toggle.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target) && nav.classList.contains('active')) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ── Scroll Animations ─────────────────────
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ── Back to Top ───────────────────────────
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── FAQ Accordion ─────────────────────────
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ── Stats Counter Animation ───────────────
function initStatsCounter() {
  const counters = document.querySelectorAll('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(start + (target - start) * eased);
          el.textContent = prefix + current.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// ── Reviews Carousel (Simple Auto-Scroll) ──
function initReviewsCarousel() {
  const carousel = document.querySelector('.reviews-carousel');
  if (!carousel) return;

  let scrollAmount = 0;
  const cardWidth = 300;
  const gap = 20;
  const speed = 1;

  function autoScroll() {
    scrollAmount += speed;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
      scrollAmount = 0;
    }
    carousel.scrollLeft = scrollAmount;
    requestAnimationFrame(autoScroll);
  }

  // Pause on hover
  let animating = true;
  carousel.addEventListener('mouseenter', () => { animating = false; });
  carousel.addEventListener('mouseleave', () => { animating = true; });

  function scrollLoop() {
    if (animating) {
      scrollAmount += speed;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    }
    requestAnimationFrame(scrollLoop);
  }

  requestAnimationFrame(scrollLoop);
}

// ── Contact Form ──────────────────────────
document.addEventListener('submit', (e) => {
  if (e.target.classList.contains('contact-form')) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Message Sent! ✓';
      btn.style.background = '#27AE60';
      e.target.reset();

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  }
});

// ── Location Provincial Accordion ──────────
function initLocationAccordion() {
  const items = document.querySelectorAll('.location-prov-item');
  items.forEach(item => {
    const question = item.querySelector('.location-prov-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      items.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

// ── Testimonials Reviews Slider ──────────
function initReviewsSlider() {
  const container = document.querySelector('.testimonial-slider-container');
  if (!container) return;

  const slides = container.querySelectorAll('.testimonial-slide');
  const prevBtn = container.querySelector('.slider-prev-btn');
  const nextBtn = container.querySelector('.slider-next-btn');
  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });
}
