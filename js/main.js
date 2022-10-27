

console.log(document.querySelector('title').textContent );


// Inyectando nav 

function ajax(url, metodo='get'){
let xhr = new  XMLHttpRequest
xhr.open(metodo,url)
xhr.send();

return xhr
}


let header = document.querySelector('header');

let xhr = ajax('plantillas/navbar.html', 'get')
xhr.addEventListener('load', () => {

if(xhr.status == 200){
header.innerHTML = xhr.response;

getPlantillas(); // una vez que la barra de navagacion cargue la llamamos 
navResponsive(); // activar el menu hamburguesa 

}


})


//INYECTANDO plantillas

function getPlantillas(){
     let main = document.querySelector('main');
     let links = document.querySelectorAll('a');
     // console.log( links);
     links.forEach(link =>{
     
     link.addEventListener ('click', (e)=>{
     e.preventDefault();
          let id = link.id;
          
          let xhr = ajax(`plantillas/${id}.html`)
          console.log(id);
          
          xhr.addEventListener('load', ()=>{
               if(xhr.status == 200){
                    let plantilla = xhr.response;
                    main.innerHTML = plantilla;
                    comprarTickets(); // Una vez que se cargaron las plantillas podemos usar el comprarTickets.js
                         
                    }
          })
   
     
     })
     
     })
}






//===============================


//HAMBUERGUESA RESPONSIVE 
// function responsiveHamburguesa(){
//      const  menuHamburguesa = document.querySelector('.nav_hamburguesa-img');
//      const navResponsive = document.querySelector('.nav_responsive div');
//      const nav_link = document.querySelector('.nav_link');
//      const nav = document.querySelector('.nav');
//      console.log(menuHamburguesa);
     
     
//      menuHamburguesa.addEventListener('click', function(){
     
//           navResponsive.classList.toggle("nav_responsive-active");
     
     
//      })
     
// }




