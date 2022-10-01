 //API FAKE STORE AGREGO LOS PRODUCTOS







 const footerPublicidad =document.getElementById('#redes')

 fetch('https://fakestoreapi.com/products/?limit=5')
 .then((res)=>res.json())
 .then((data)=> data.forEach((info) => {
    const publicidad =document.getElementById('frases')
    publicidad.classList.add('productosPublicidad')
    publicidad.innerHTML = `
        <h3> FakeApiPublicidad </h3>
        <p>  ${info.title}</p>
        <h4>  ${info.price}</h4>
        <h4>  ${info.description}</h4>
      
        
         `

         footerPublicidad.appendChild(publicidad)
         console.log(data)

 }))