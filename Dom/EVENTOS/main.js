function enviar(nombre, correo) { 
    console.log(correo)
    alert('Hola ${nombre} tu correo es ${correo)')
}

// saber que elemento queremos escuchar  querySelector
const boton = document.querySelector('#botonEnviar')
 // 2 ejecutar el addEventListener para detectar alguna accion del usuario
 
boton.addEventListener