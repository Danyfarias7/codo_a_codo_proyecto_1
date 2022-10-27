
function comprarTickets(){


const btn_resumen = document.querySelector(".btn-resumen");
const btn_borrar = document.querySelector(".btn-borrar");
const total_pagar = document.querySelector(".section_formulario_total-a-pagar_  div"
);

const nombre = document.querySelector(".section_formulario-name_ input");
const apellido = document.querySelector(".section_formulario-ape_ input");
const email = document.querySelector(".section_formulario-correo_ input");
const cantidad = document.querySelector(".section_formulario-cant_ input");


const cards_uno = document.querySelector(".cards_uno ");
const cards_dos = document.querySelector(".cards_dos ");
const cards_tres = document.querySelector(".cards_tres ");




function getSelectValue() {
     var selectedValue = document.querySelector("#list").value;
     return selectedValue;
}

function totalAPagarDatos(){
     let montoApagar;
     montoApagar = aplicandoDescuento(getSelectValue());

     return  `
     <p>${nombre.value} ${apellido.value}</p>
     <p>${email.value}</p>
     <p>Categoria: ${getSelectValue()}</p>
     <p> Cantidad: ${cantidad.value}</p>
     </p> Total a pagar: $${montoApagar}</p>`;
     
}


function validandoTodosCamposVacios(){

 let validarDatos = false;
  if(nombre.value === '' && apellido.value === '' && email.value === '' && cantidad.value === '' ){
     validarDatos = true;
  }
  
  return validarDatos;

}


     btn_resumen.addEventListener("click", (e) => {
          e.preventDefault();

          eliminarClaseCardSeleccionada();
          
          if(!validandoTodosCamposVacios()){
          
               total_pagar.innerHTML =  totalAPagarDatos();
               total_pagar.classList.add("section_formulario_total-a-pagar-style");
     
          }else{
               total_pagar.innerHTML = "No se permiten campos vacios.";
               total_pagar.classList.add("section_formulario_total-a-pagar-style");
          }
          
     
     });
     
     
     btn_borrar.addEventListener('click',(e)=>{
          e.preventDefault();
          eliminarClaseCardSeleccionada();
          limpiarInputs()
          total_pagar.innerHTML = "";
          total_pagar.classList.remove("section_formulario_total-a-pagar-style");
          
     
     })
     
     




     function aplicandoDescuento(value) {
          let resu = 0;
          let cantidadTotal = 200;
          cantidadTotal *= cantidad.value; // 200 x 5 tickets ej
      
          //  MEJORAR ESTO
          if (value == "Estudiante") {
               resu = cantidadTotal * 0.8;
               cards_uno.classList.add("card_selecionada");
          } else if (value == "Trainee") {
               resu = cantidadTotal * 0.5;
               cards_dos.classList.add("card_selecionada");
          } else if (value == "Junior") {
               resu = cantidadTotal - (cantidadTotal * 0.15);
               cards_tres.classList.add("card_selecionada");
          }

          return resu;
     }
     


     function eliminarClaseCardSeleccionada(){
          cards_uno.classList.remove("card_selecionada");
          cards_dos.classList.remove("card_selecionada");
          cards_tres.classList.remove("card_selecionada");
     }


     // FUNCIONES DEL EVENTO BORRAR 
     function  limpiarInputs(){
       nombre.value = "";
       apellido.value = "";
       email.value = "";
       cantidad.value = "";
     
     }

}