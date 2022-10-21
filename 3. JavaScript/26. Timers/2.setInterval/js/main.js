document.body.style.fontFamily = 'verdana'

    // Creamos contador con valor 0 para usar en "setInterval"

let contador = 0;

    // Creamos nueva variable llamada "newContador" para declarar el method "setInterval"

let newContador = setInterval( () => {
    
    contador > 10 ?clearInterval(newContador) : console.log(contador++)

}, 1000);