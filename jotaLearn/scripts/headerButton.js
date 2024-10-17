// Handler Menu button
const navList = document.querySelector('.nav-list');
const button = document.querySelector('.menu-toggle');

export const init = () => {
    button.addEventListener('click', toggleMenu);
}

const toggleMenu = () => {
    navList.classList.toggle('open-menu');
}