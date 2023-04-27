const conectar = () => {
    let botonCargar = document.querySelector('#boton-cargar');
    let mensajeCargar = document.querySelector('#mensaje-cargando')

    botonCargar.addEventListener('click', function() {

        mensajeCargar.innerHTML = `Cargando...`;

        setTimeout(function(){
            mensajeCargar.innerHTML = `Cargado`;
        }, 2000);
    
        setTimeout(function(){
            mensajeCargar.innerHTML = `Gracias por esperar`;
        }, 3000);
    });
}
conectar()

    // Contador Regresivo //
const botonContador = document.querySelector('#boton-contador');
const contador = document.querySelector('#contador');

let segundosContador = 10;

botonContador.addEventListener('click', function(){

    let interval = setInterval(() => {
        contador.innerHTML = `${segundosContador}`;
        segundosContador--;

    if (segundosContador < 0) {
        clearInterval(interval);
    }
    }, 1000);
});




