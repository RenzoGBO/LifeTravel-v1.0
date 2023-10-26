const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = form.elements.nombre.value;
    const apellido = form.elements.apellido.value;
    const correo = form.elements.correo.value;

    const mensaje = form.elements.mensaje.value;
    const telefono = '+543484563013'; 


    const mensajeWhatsapp = `Nombre y Apellido: ${nombre} ${apellido}\nCorreo electrónico: ${correo}\nMensaje: ${mensaje}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeWhatsapp)}`;
    
    window.location.href = url;

});