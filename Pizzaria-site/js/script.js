
document.addEventListener('DOMContentLoaded', function () {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navbar');
  menuToggle && menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });


  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
 
        if (navLinks.classList.contains('open')) navLinks.classList.remove('open');
      }
    });
  });


  window.handleContactSubmit = function (e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const message = form.message.value.trim();
    if (!name || !message) return alert('Preencha todos os campos.');

    
    alert('Obrigado, ' + name + '! Sua mensagem foi recebida. (Demo)');
    form.reset();
    return false;
  };


  const header = document.querySelector('.nav-wrap');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 6) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });
});
