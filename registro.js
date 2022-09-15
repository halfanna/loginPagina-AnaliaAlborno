// formulario de registro

const formularioClientes = document.getElementById('formulario')
const botonRegistro = document.getElementById('btn')

// crear un objetos con los datos del cliente

class Datos{
 constructor(nombre,email,password){
  this.nombre=nombre;
  this.email=email;
  this.password=password;
 }
    
}

let datosUsuarioNuevo = []






botonRegistro.addEventListener("submit",(e)=>{
    e.preventDefault();

    let nombreUsuario =document.getElementById('nombre').value
    let emailUsuario = document.getElementById('email').value
    let userPassword = document.getElementById('pass').value

    for (let usuarioNuevo of datosUsuarioNuevo){
    
     if((usuarioNuevo.nombre === nombreUsuario)&&(usuarioNuevo.email ===emailUsuario)&&(usuarioNuevo.password ===userPassword)){
      window.location.href ="productos.html"

     }else
      swal({
      title: "Campos incorrectos.",
      icon:"error"
     });
    }
   
    })
    
  
     


// ingreso de datos en el formulario  
// function ingresoCorrecto() {
//   Toastify({
//     text: "Bienvenido! Sos un nuevo usuario",
//     duration: 5000,
//     newWindow: true,
//     close: true,
//     gravity: "top", 
//     position: "center", 
//     stopOnFocus: true, 
//     style: {
//       background: " #181818",
      
//     },
//    botonRegistro: function(){} 
//   }).showToast();


// }
 
    

  

  





