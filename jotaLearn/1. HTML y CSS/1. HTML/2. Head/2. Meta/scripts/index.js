//DOM
const menuBtn = document.querySelector('.menu-toggle');
const barsMenu = document.querySelector('.navegacion');

// Oculta la barra de navegacion luego de hacer click en algun elemento.

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      const menuToggle = document.querySelector('#menu-toggle');
      const navegacion = document.querySelector('.navegacion');
      const elementosLista = document.querySelectorAll('.navegacion li a');
  
      menuToggle.addEventListener('click', () => {
        navegacion.style.display = (navegacion.style.display === 'none') ? 'flex' : 'none';
      });
  
      elementosLista.forEach(elemento => {
        elemento.addEventListener('click', () => {
          navegacion.style.display = 'none';
        });
      });
    }
  });

// Función Menu
const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu');
}
  
// Función inicializadora
const init = () => {

  // Evento para el menú
  menuBtn.addEventListener('click', toggleMenu);

}
init();