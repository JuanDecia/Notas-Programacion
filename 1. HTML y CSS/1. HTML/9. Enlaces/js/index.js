//DOM
const menuBtn = document.querySelector('.menu-label');
const barsMenu = document.querySelector('.cont-menu');

// Función menu.
const openMenu = () => {
    barsMenu.classList.toggle('open-menu');
}

// Función inicializadora
const init = () => {
    // Evento menu
    menuBtn.addEventListener('click', openMenu);
}
init();