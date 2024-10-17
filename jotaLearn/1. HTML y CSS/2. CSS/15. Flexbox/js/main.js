// DOM
const menuBtn = document.querySelector('.menu-toggle');
const barsMenu = document.querySelector('.list-links');

const toggleMenu = () => {
    barsMenu.classList.toggle('open-menu');
}

const init = () => {
    // Evento menú
    menuBtn.addEventListener('click', toggleMenu);
}

init();