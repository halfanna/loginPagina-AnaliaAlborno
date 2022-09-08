// formulario de registro

const formularioClientes = document.getElementById('formulario')
const botonRegistro = document.getElementById('btn')

// creamos boton array con datos de formulario- 
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
    localStorage.setItem('password',userPassword)
    
    ingresoCorrecto();
     })


// ingreso de datos en el formulario  
function ingresoCorrecto() {
  Toastify({
    text: "Bienvenido! Sos un nuevo usuario",
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top", 
    position: "center", 
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(180deg,#FB1834, #FB2B90)"
      
    },
   botonRegistro: function(){} 
  }).showToast();


}
 
    

  
// function btnSwal() {

//   if (datosUsuario !="") {
//     swal({
//       title: "Good job!",
//       text: "You clicked the button!",
//       icon: "success",
//       button: "Aww yiss!",
//     });
//     botonRegistro("click")
//   }
 
// }
  





