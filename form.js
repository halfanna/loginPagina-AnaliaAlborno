

const main = document.getElementById('formulario')
const botonRegistro = document.getElementById('btn1')


botonRegistro.addEventListener("submit",(e)=>{
  e.preventDefault();
  const datosUsuario = document.getElementById('divDatos')
  let nombreUsuario =document.getElementById('nombre').value
  let apellidoUsuario=document.getElementById('apellido').value
  datosUsuario.style.position="fixed"
  datosUsuario.style.width= "500px"
  datosUsuario.classList.add('form')
  datosUsuario.innerHTML  =   `
  <p>  nombre : ${nombreUsuario}</p>
  <p>  apellido : ${apellidoUsuario}</p>
  <p>  telefono : ${telefono}</p>
  <p>  email : ${email}</p>
  <p>  pass: ${pass} </p>
 `

 main.appendChild(datosUsuario)
 
})

