    // Primero tomamos el contenedor a modificar
const contSetTimeOut = document.querySelector('.set-time-out');
let letraNegra = document.getElementsByClassName('letra-negra');

    // Creamos la funcion setTimeout() con un retardo de 10 seg y aplicando cambios en el background.

let retardo = setTimeout ( () => {

    contSetTimeOut.style.backgroundColor = 'darkgrey';
    contSetTimeOut.style.color = 'white';
    
    for (let i = 0; i < letraNegra.length; i++) {
        letraNegra[i].style.color = 'black';
    }

    clearTimeout(retardo);
    console.log(`Se ha limpiado el retardo.`);
},3000);


// ############################## setInterval()
let contInterval = document.querySelector('.cont-interval');

let contador = 0;

let newContador = setInterval( () => {
    contador > 5 ? clearInterval(newContador) : contador++;
    let fecha = new Date();
    contInterval.innerHTML += `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} | `;
}, 1000);