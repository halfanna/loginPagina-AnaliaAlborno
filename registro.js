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
// array  vacio de datos 
let datosUsuarioNuevo = []




/// evento que toma los datos del input y luego los guarda en el local storage

botonRegistro.addEventListener("click",(e)=>{
    e.preventDefault();

    let nombreUsuario =document.getElementById('nombre').value
    let emailUsuario = document.getElementById('email').value
    let userPassword = document.getElementById('pass').value

    let datosUser = new Datos(nombreUsuario,emailUsuario,userPassword);
    
    datosUsuarioNuevo.push(datosUser)
        
        localStorage.setItem("infoInput", JSON.stringify(datosUsuarioNuevo));
      

        ingresoCorrecto();
      
        setTimeout(()=>{
         window.open('productos.html')
        },1000)
        
      }
)



// USO TOASTIFY PARA EL INGRESO DE UN NUEVO USUARIO
 
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
      background: " #181818",
      
    },
    
   botonRegistro: function(){} 
  }).showToast();
  }
 
    

  

  





