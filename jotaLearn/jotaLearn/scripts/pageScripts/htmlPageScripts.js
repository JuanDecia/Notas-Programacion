document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropRight-menu');
    const scrollContainer = document.getElementById('scrollContainer');

    // Manejar el clic en el botón de menú
    menuToggle.addEventListener('click', () => {
        // Alternar visibilidad del menú
        dropdownMenu.classList.toggle('show'); // Cambiar a 'show'
        
        // Activar el contenedor de desplazamiento
        scrollContainer.classList.toggle('active'); // Alterna la clase 'active' para el contenedor
    });

    const options = dropdownMenu.querySelectorAll('li[data-id]');

    // Cargar el JSON que contiene las URLs
    fetch('../../scripts/pageScripts/urls.json') // Ajusta la ruta según sea necesario
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(optionUrls => {
            options.forEach(option => {
                const optionId = option.getAttribute('data-id');

                if (optionId && optionUrls[optionId]) {
                    option.addEventListener('click', () => {
                        // Agregar efecto de blur al body
                        document.body.classList.add('blur');

                        // Desplazarse a la parte superior de la página
                        window.scrollTo({ top: 0, behavior: 'smooth' });

                        // Redirigir después de un breve retraso para permitir el efecto
                        setTimeout(() => {
                            window.location.href = optionUrls[optionId];
                        }, 500); // Ajusta el tiempo si es necesario
                    });
                }
            });
        })
        .catch(error => console.error('Error al cargar URLs:', error));
});
