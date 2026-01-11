document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle functionality
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for anchor links (only if target exists)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ✅ Netlify form handling: DO NOT prevent submit
  // Target a specific form if possible (recommended)
  const contactForm =
    document.querySelector('form[name="contact"]') ||
    document.querySelector('form[data-netlify="true"]') ||
    document.querySelector('form');

  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      // Let the browser + Netlify submit normally.
      // Optional: disable submit button to prevent double submissions.
      const submitBtn = contactForm.querySelector('button[type="submit"], input[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.8';
        submitBtn.textContent = submitBtn.textContent.includes('Sending') ? submitBtn.textContent : 'Sending...';
      }
    });
  }
});

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', function () {
    this.classList.add('shadow-xl');
    this.classList.remove('shadow-lg');
  });
  card.addEventListener('mouseleave', function () {
    this.classList.add('shadow-lg');
    this.classList.remove('shadow-xl');
  });
});
