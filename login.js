

// el login para que ingrese 

let user = document.getElementById('userEmail')
let contraseña =document.getElementById('pass')
const botonLogin = document.getElementById('button')



class Users {
  constructor(usuario,password){
  this.usuario = usuario;
  this.password= password;
}
}

let usuarios = []
let user1 = new Users("ana@gmail.com","1234")
let user2 = new Users ("vale@gmail.com","5678")
let user3 =new Users ("nadin@gmail.com","0000")
let user4 =new Users("dary@gmail.com","4444")
usuarios.push(user1,user2,user3,user4)


botonLogin.addEventListener("click",(e)=>{
  e.preventDefault();
  let emailUser = document.getElementById("userEmail").value;
  let passwordUser = document.getElementById("pass").value;

for (let usuario of usuarios){
    
  const puedoEntrar = (usuario.usuario === emailUser ) && (usuario.password === passwordUser)? true:false
  puedoEntrar ? window.location.href="productos.html"
  
   : swal({
    title: " Usuario Incorrecto. Por favor registrese. ",
    icon:"error"
   });
}
})




  
