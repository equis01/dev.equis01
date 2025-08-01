// PORTFOLIO FUNCTIONALITY

// Datos de los proyectos
const projectsData = {
  /*
  // PROYECTOS TEMPORALMENTE DESACTIVADOS - Descomentar cuando estén listos los demos
  'medios-con-valor': {
    title: 'Medios Con Valor',
    category: 'Sitio Web Corporativo',
    description: 'Plataforma corporativa completa para empresa de medios con gestión de contenido, área de clientes y sistema de reportes.',
    image: 'https://via.placeholder.com/600x400/6C5CE7/FFFFFF?text=Medios+Con+Valor',
    features: [
      'Diseño corporativo profesional',
      'Área de clientes personalizada',
      'Sistema de gestión de contenido',
      'Reportes y analytics integrados',
      'Optimización SEO completa'
    ],
    results: [
      'Aumento del 150% en consultas online',
      'Reducción del 40% en tiempo de gestión',
      'Mejora del 200% en presencia digital'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: '#'
  },
  'restaurante-gourmet': {
    title: 'Restaurante Gourmet',
    category: 'Sitio Web Restaurante',
    description: 'Sitio web elegante para restaurante gourmet con menú digital interactivo y sistema de reservas en línea.',
    image: 'https://via.placeholder.com/600x400/A29BFE/FFFFFF?text=Restaurante+Gourmet',
    features: [
      'Menú digital interactivo',
      'Sistema de reservas online',
      'Galería de platillos',
      'Integración con redes sociales',
      'Diseño responsive premium'
    ],
    results: [
      'Aumento del 80% en reservas online',
      'Reducción del 60% en llamadas telefónicas',
      'Mejora del 120% en engagement'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#'
  },
  'tienda-fashion': {
    title: 'Tienda Fashion',
    category: 'E-commerce',
    description: 'E-commerce completo para tienda de ropa con carrito avanzado, múltiples métodos de pago y gestión de inventario.',
    image: 'https://via.placeholder.com/600x400/00B894/FFFFFF?text=Tienda+Fashion',
    features: [
      'Catálogo de productos ilimitado',
      'Carrito de compras avanzado',
      'Múltiples métodos de pago',
      'Gestión de inventario automática',
      'Sistema de cupones y descuentos'
    ],
    results: [
      'Aumento del 300% en ventas online',
      'Reducción del 50% en abandonos de carrito',
      'Crecimiento del 180% en clientes recurrentes'
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    liveUrl: '#'
  },
  'electronicos-pro': {
    title: 'Electrónicos Pro',
    category: 'E-commerce',
    description: 'Tienda online especializada en electrónicos con comparador de precios, reseñas de usuarios y sistema de garantías.',
    image: 'https://via.placeholder.com/600x400/E17055/FFFFFF?text=Electr%C3%B3nicos+Pro',
    features: [
      'Comparador de precios integrado',
      'Sistema de reseñas y calificaciones',
      'Gestión de garantías',
      'Filtros avanzados de búsqueda',
      'Chat de soporte en vivo'
    ],
    results: [
      'Aumento del 250% en conversiones',
      'Mejora del 90% en satisfacción del cliente',
      'Reducción del 70% en devoluciones'
    ],
    tech: ['WooCommerce', 'WordPress', 'PHP', 'MySQL'],
    liveUrl: '#'
  },
  'crm-empresarial': {
    title: 'CRM Empresarial',
    category: 'Sistema Web',
    description: 'Sistema completo de gestión de clientes con seguimiento de leads, automatización de procesos y reportes avanzados.',
    image: 'https://via.placeholder.com/600x400/FDCB6E/000000?text=CRM+Empresarial',
    features: [
      'Gestión completa de clientes',
      'Seguimiento de leads automático',
      'Reportes y analytics avanzados',
      'Automatización de procesos',
      'Integración con email marketing'
    ],
    results: [
      'Aumento del 200% en conversión de leads',
      'Reducción del 60% en tiempo de gestión',
      'Mejora del 150% en seguimiento de clientes'
    ],
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
    liveUrl: '#'
  },
  'red-social-corp': {
    title: 'Red Social Corporativa',
    category: 'Sistema Web',
    description: 'Plataforma interna para comunicación empresarial con chat en tiempo real, gestión de proyectos y colaboración.',
    image: 'https://via.placeholder.com/600x400/74B9FF/FFFFFF?text=Red+Social+Corp',
    features: [
      'Chat en tiempo real',
      'Gestión de proyectos colaborativa',
      'Sistema de notificaciones',
      'Compartir archivos y documentos',
      'Videoconferencias integradas'
    ],
    results: [
      'Mejora del 180% en comunicación interna',
      'Reducción del 50% en emails corporativos',
      'Aumento del 120% en productividad'
    ],
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    liveUrl: '#'
  },
  'boda-elegante': {
    title: 'Boda Elegante',
    category: 'Invitación Digital',
    description: 'Invitación digital interactiva para boda con música ambiente, galería de fotos y confirmación de asistencia.',
    image: 'https://via.placeholder.com/600x400/E84393/FFFFFF?text=Boda+Elegante',
    features: [
      'Diseño romántico y elegante',
      'Música de fondo personalizada',
      'Galería de fotos de la pareja',
      'Confirmación de asistencia RSVP',
      'Contador regresivo al evento'
    ],
    results: [
      'Confirmación del 95% de invitados',
      'Reducción del 80% en costos de impresión',
      'Experiencia memorable para los invitados'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: '#'
  },
  */
  
  // PROYECTOS ACTIVOS CON DEMOS DISPONIBLES
  'xv-princess': {
    title: 'XV Años Princess',
    category: 'Invitación Digital',
    description: 'Invitación temática para XV años con animaciones especiales, efectos visuales y música personalizada.',
    image: 'https://via.placeholder.com/600x400/FF7675/FFFFFF?text=XV+A%C3%B1os+Princess',
    features: [
      'Tema princess personalizado',
      'Animaciones y efectos especiales',
      'Música y sonidos temáticos',
      'Galería de fotos de crecimiento',
      'Lista de regalos integrada'
    ],
    results: [
      'Experiencia única e inolvidable',
      'Compartido más de 500 veces',
      'Ahorro del 70% vs invitaciones tradicionales'
    ],
    tech: ['CSS3', 'JavaScript', 'API Rest', 'HTML5'],
    liveUrl: 'demos/xv-b&b'
  },
  'evento-corporativo': {
    title: 'Evento Infantil',
    category: 'Invitación Digital',
    description: 'Invitación profesional para evento infantil con registro de asistentes, agenda del evento.',
    image: 'demos/hbd-3y.png',
    features: [
      'Diseño profesional',
      'Registro de asistentes automático en tu hoja de cálculo',
      'Agenda detallada del evento'
    ],
    results: [
      'Registro del 90% de invitados',
      'Mejora del 150% en asistencia',
      'Experiencia profesional destacada'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'demos/hbd-3y'
  }
};

// Filtrado de proyectos
function filterProjects(category) {
  const projectCards = document.querySelectorAll('.project-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  // Actualizar botones activos
  filterBtns.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`[data-filter="${category}"]`).classList.add('active');
  
  // Filtrar proyectos
  projectCards.forEach(card => {
    const cardCategory = card.dataset.category;
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Abrir modal de proyecto
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  // Actualizar contenido del modal
  document.getElementById('modalTitle').textContent = project.title;
  document.getElementById('modalCategory').textContent = project.category;
  document.getElementById('modalDescription').textContent = project.description;
  document.getElementById('modalImage').src = project.image;
  
  // Actualizar características
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
  
  // Actualizar resultados
  const resultsList = document.getElementById('modalResults');
  resultsList.innerHTML = project.results.map(result => `<li>${result}</li>`).join('');
  
  // Actualizar tecnologías
  const techContainer = document.getElementById('modalTech');
  techContainer.innerHTML = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
  
  // Actualizar enlace de demo
  const demoBtn = document.getElementById('demoBtn');
  if (project.liveUrl && project.liveUrl !== '#') {
    demoBtn.href = project.liveUrl;
    demoBtn.style.display = 'inline-block';
  } else {
    demoBtn.style.display = 'none';
  }
  
  // Mostrar modal
  document.getElementById('projectModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Cerrar modal de proyecto
function closeProjectModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Función para comprar plantilla con Mercado Pago
function buyTemplate(projectId) {
  const project = projectsData[projectId];
  if (!project) return;
  
  let message = `Hola, me interesa la plantilla "${project.title}" de ${project.category}.`;
  
  if (project.category === 'Invitación Digital') {
    message += ' ¿Podrías darme más información sobre la personalización y el precio?';
  } else {
    message += ' ¿Podrías darme más información sobre las funcionalidades y el precio?';
  }
  
  const whatsappUrl = `https://wa.me/5214462220020?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Filtros
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterProjects(btn.dataset.filter);
    });
  });
  
  // Botón de compra de plantilla
  document.getElementById('buyTemplateBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const projectId = document.getElementById('modalTitle').textContent.toLowerCase().replace(/ /g, '-');
    buyTemplate(projectId);
  });
  
  // Cerrar modal al hacer clic fuera
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
      closeProjectModal();
    }
  });
  
  // Cerrar modal con ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeProjectModal();
    }
  });
});
