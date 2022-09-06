



let user = document.getElementById('userEmail')
let contraseña =document.getElementById('pass')
const botonLogin = document.getElementById('button')



botonLogin.addEventListener("click",(e)=>{
  e.preventDefault();
  let emailUser = document.getElementById("userEmail").value
  let passwordUser = document.getElementById("pass").value

  const puedeEntrar =(emailUser==="ana@gmail.com")&&(passwordUser==="1234")? true:false 
   puedeEntrar ? window.location.href ="productos.html" : alert("Usuario Incorrecto ,vuelva a intentar.")

})


