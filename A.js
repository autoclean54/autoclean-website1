document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  fadeElements.forEach(el => observer.observe(el));
});

// Alerta para formulario
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por tu solicitud! Pronto te contactaremos.');
});