


function navResponsive(){

  const  menuHamburguesa = document.querySelector('.nav_hamburguesa');
  const navResponsive = document.querySelector('.nav_responsive div');
  const nav_link = document.querySelector('.nav_link');
  const nav = document.querySelector('.nav');

  
  
  menuHamburguesa.addEventListener('click', function(){
  
  
       navResponsive.classList.toggle("nav_responsive-active");
  
  
  })
}


