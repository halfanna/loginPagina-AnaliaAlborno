// formulario 

const formularioClientes = document.getElementById('formulario')
const botonRegistro = document.getElementById('btn')

// creamos boton creamos array con datos de formulario- 
botonRegistro.addEventListener("click",(e)=>{
    e.preventDefault( {passive: true});
    let datosUsuario = [];
    let nombreUsuario =document.getElementById('nombre').value
    let apellidoUsuario=document.getElementById('apellido').value
    let telUser = document.getElementById('tel').value
    let emailUsuario = document.getElementById('email').value
    let userPassword = document.getElementById('pass').value
   
  datosUsuario.push(nombreUsuario,apellidoUsuario,telUser,emailUsuario,userPassword)
    console.log(datosUsuario)
      // guardamos datos en el local storage

    localStorage.setItem('name',nombreUsuario)
    localStorage.setItem('email',emailUsuario)
    
     })
  

  
  




