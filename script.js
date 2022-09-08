


const  menuHamburguesa = document.querySelector('.nav_hamburguesa');
const navResponsive = document.querySelector('.nav-responsive');
const nav_link = document.querySelector('.nav_link');
console.log(menuHamburguesa);


menuHamburguesa.addEventListener('click', function(){

navResponsive.appendChild(nav_link );
nav_link.classList.toggle("nav_link-active");

})