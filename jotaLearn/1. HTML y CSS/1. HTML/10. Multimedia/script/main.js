const menuBtn = document.querySelector('.menu-label');
const barsMenu = document.querySelector('.cont-links');

const openMenu = () => {
    barsMenu.classList.toggle('open-menu');
}

const init = () => {
    menuBtn.addEventListener('click', openMenu );
}
init();

