// Año automático en footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Menú hamburguesa
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll para enlaces internos
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Ajuste para navbar fija
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observar elementos para animación
  const animateElements = document.querySelectorAll('.benefit, .testimonial, .card');
  animateElements.forEach(el => {
    observer.observe(el);
  });

  // Contador animado para estadísticas
  const counters = document.querySelectorAll('.stat .number');
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const suffix = counter.textContent.replace(/\d/g, '');
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, 30);
    });
  };

  // Activar contadores cuando sean visibles
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    });
    statsObserver.observe(statsSection);
  }
});

// Formulario de contacto (si existe)
const contactForm = document.querySelector(".formulario-contacto");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Mostrar mensaje de éxito
    const alerta = document.getElementById("alertaEnvio");
    if (alerta) {
      alerta.classList.add("visible");
      setTimeout(() => {
        alerta.classList.remove("visible");
      }, 4000);
    }

    // Enviar formulario (puedes mantener FormSubmit o usar otro servicio)
    // this.submit(); // Descomenta para envío real
    
    this.reset();
  });
}

// Loader
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hide');
    }, 500);
  }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Modal functions
function openReviewModal() {
  document.getElementById('reviewModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeReviewModal() {
  document.getElementById('reviewModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('reviewModal');
  if (event.target === modal) {
    closeReviewModal();
  }
}

// Review form submission
document.addEventListener('DOMContentLoaded', function() {
  const reviewForm = document.querySelector('.review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      // Show success message
      setTimeout(() => {
        alert('¡Gracias por tu reseña! La revisaré pronto.');
        closeReviewModal();
        reviewForm.reset();
      }, 100);
    });
  }
});

// Función para convertir rating a emojis
function updateRatingEmoji() {
  const ratingInputs = document.querySelectorAll('input[name="rating"]');
  const ratingEmojiField = document.getElementById('ratingEmoji');
  
  ratingInputs.forEach(input => {
    input.addEventListener('change', function() {
      const rating = parseInt(this.value);
      let emojiStars = '';
      
      for (let i = 0; i < rating; i++) {
        emojiStars += '⭐';
      }
      
      ratingEmojiField.value = emojiStars;
    });
  });
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  updateYear();
  hideLoader();
  updateRatingEmoji();
});