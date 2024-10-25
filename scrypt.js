// Efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Formulario de contacto
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nombre = document.querySelector('input[name="nombre"]').value;
    const correo = document.querySelector('input[name="correo"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
  
    // Enviar el formulario a través de un servidor de correo electrónico
    // o una API de correo electrónico
    console.log('Formulario enviado:', nombre, correo, mensaje);
  });