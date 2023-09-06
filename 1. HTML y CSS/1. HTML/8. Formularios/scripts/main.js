// DOM
const menubtn = document.querySelector('.menu-label');
const barsMenu = document.querySelector('.cont-lista');

// Función para abrir el menu en resposive
const openMenu = () => {
    barsMenu.classList.toggle('open-menu');
}

// Función inicializadora
const init = () => {
    menubtn.addEventListener('click', openMenu);
}
init();
