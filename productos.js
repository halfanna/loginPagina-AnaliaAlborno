 const main =document.getElementById('main')


 // API FAKE STORE AGREGO LOS PRODUCTOS
 fetch('https://fakestoreapi.com/products?limit=5')
   .then((res)=>res.json())
   .then((data)=> data.forEach((info) => {
      const productos =document.createElement('div')
      productos.classList.add('productos')
      productos.innerHTML = `
     
          <p>  ${info.id}</p>
          <h3>  ${info.title}</h3>
          <h3>  ${info.price}</h3>
          <h3>  ${info.category}</h3>
          <p>  ${info.description}</p>
          
           `

           main.appendChild(productos)
           console.log(data)

   }))

  

 
 
