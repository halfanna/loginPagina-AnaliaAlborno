// creo un array vacio

const articulosStock = []

// constructor de articulos
class Articulos {
    constructor (id,nombre,tipo,color,precio,img ){
        this.id = id;
        this.nombre= nombre;
        this.tipo = tipo;
        this.color=color;
        this.precio=precio;
        this.img=img;
       
        }
       
  }

// pusheo los articulos a mostrar
articulosStock.push(new Articulos("1","London","Cinto","rojo",1300 ,'./imagenes/newpic.jpg' , ))
articulosStock.push(new Articulos("2","Madrid","Cartera","rojo croco",6590 , './imagenes/bolso1.webp' ))
articulosStock.push(new Articulos("3","dallas","bandolera","negro croco",4500 ,'./imagenes/bandoleranaranja.jpg' ))
articulosStock.push(new Articulos("4","grecia","bolso","verde ingles",7590 ,'./imagenes/bolso1.webp'  ))
articulosStock.push(new Articulos("5","holly","bandolera","rojo croco",6790 , './imagenes/bolso1.webp' ))
articulosStock.push(new Articulos("6","kenya","bandolera","azul",5590 , './imagenes/newpic.jpg' ))
articulosStock.push(new Articulos("7","paris","cinto","azul fracia",1590 , './imagenes/newpic.jpg'))
articulosStock.push(new Articulos("8","marilyn","cinto","verde benetton",2590 , './imagenes/newpic.jpg' ))



 // traigo los elementos de html
const modal = document.getElementById('myModal');
const mainCarrito = document.getElementById('productos');
const cerrar =document.getElementById('cerrar');
const body = document.getElementsByTagName('body');


// arreglo de articulos elegidos por el cliente
let  articuloElegido = []



// funcion mostrar articulo
const mostrar = (prodId) => {
    const articulo = articulosStock.find((prod) => prodId === prod.id)
    articuloElegido.push(articulo)
 

    
   
   
 }

// funcion cerrar modal y borrar articulo 
 const borrar = (prodId) => {

    const articuloEliminar = articuloElegido.filter(prod => prodId === prod.id)
    console.log(articuloEliminar)
    articuloElegido.pop()
    
   
  
  
   }

//  uso un for each para recorrer los articulos y mostrarlos en la pagina

articulosStock.forEach((item) =>{
   
    const divArticulos = document.createElement('div')
     divArticulos.classList.add('div-item')
     divArticulos.innerHTML =  `
     <img src=${item.img} class="img" >
     <h2> Nombre: ${item.nombre}</h2>
     <button id="ver${item.id}" class="btn1"> Ver descripcion</button>
    
    `

    mainCarrito.appendChild(divArticulos)
 // creo el boton para mostrar la descripcion del producto

    const botonVerMas = document.getElementById(`ver${item.id}`) 
    
    botonVerMas.addEventListener('click', () =>{
     
       mostrar(item.id)
      

        mostrarProductos()
        
    })
           
   

})

const mostrarProductos = () => {
   
     articuloElegido.forEach((prod) =>{
     const divArticulosElegido = document.createElement('div')
     divArticulosElegido.classList.add('elegidos')
   
     divArticulosElegido.innerHTML =   `
        <img src=${prod.img} class="img2" >
        <h2 class = "tituloProducto">  ${prod.nombre}  </h2>
        <p class="precio">  $ ${prod.precio} </p>
       
        <p>${prod.tipo} : color en stock  ${prod.color} fabricado en  cuero legitimo .</p>
        <button id="borrar${prod.id}" class="btn1"> Cerrar </button>
    
         
  `
     modal.appendChild(divArticulosElegido)
    
// evento para borrar articulo 
     const cerrarModal = document.getElementById(`borrar${prod.id}`)
     cerrarModal.addEventListener('click',()=> {
      borrar(prod.id)
      divArticulosElegido.innerHTML = " ";
    

      
      })
        
        } )
        
       
   
     }
//  const main =document.getElementById('main')


 // API FAKE STORE AGREGO LOS PRODUCTOS


 const footerPublicidad =document.getElementById('#redes')

 fetch('https://fakestoreapi.com/products/?limit=5')
 .then((res)=>res.json())
 .then((data)=> data.forEach((info) => {
    const productos =document.getElementById('frases')
    productos.classList.add('productosPublicidad')
    productos.innerHTML = `
   
        <p>  ${info.title}</p>
        <h3> FakeApiPublicidad </h3>
        <h4>  ${info.price}</h4>
        <h4>  ${info.description}</h4>
        
        
         `

         footerPublicidad.appendChild(productos)
         console.log(data)

 }))