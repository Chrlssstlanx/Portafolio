const labelCorreo = document.getElementById('labelCorreo');
const labelMensaje = document.getElementById('labelMensaje');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

correo.addEventListener('focus', ()=>{
    correo.placeholder='';
    labelCorreo.style.visibility="visible"
})
correo.addEventListener('blur', ()=>{
    if (correo.value === '') {
        labelCorreo.style.visibility="hidden"
        correo.placeholder='Correo'
    }
})

mensaje.addEventListener('focus', ()=>{
    mensaje.placeholder='';
    labelMensaje.style.visibility="visible"
})
mensaje.addEventListener('blur', ()=>{
    if (mensaje.value === '') {
        labelMensaje.style.visibility="hidden"
        mensaje.placeholder='Mensaje';
    }
})



window.addEventListener('scroll', ()=>{
    let navegacion = document.getElementById('navBar');
    let posicionScroll = window.scrollY;

    if (posicionScroll > 70) {
        navegacion.classList.add('fixed')
    } else {
        navegacion.classList.remove('fixed')
    }
})