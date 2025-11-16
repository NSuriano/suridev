
//menú desplegable
const btnMenu = document.querySelector("#boton-menu");
const btnCerrar = document.querySelector("#boton-cerrar");
const navbar= document.querySelector(".nav-menu");

btnMenu.addEventListener("click", deslizarMenu);
btnCerrar.addEventListener("click", cerrarMenu);

function deslizarMenu() {
    
    navbar.classList.toggle("active");
            
}

function cerrarMenu(){

    navbar.classList.toggle("active");
}