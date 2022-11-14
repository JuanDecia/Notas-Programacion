'use strict'

let contResultado = document.getElementsByClassName("cont-resultado");

try {
    x = 10;
}
catch (error) {
    console.log(error);
    contResultado[0].innerHTML += error;
}
finally {
    console.log('Termina la revisión de errores.');
    contResultado[1].innerHTML += 'Termina la revisión de errores.';
}

console.log('');

console.log('El programa continua a pesar del error, gracias al fragmento de try y catch.');
contResultado[2].innerHTML += 'El programa continua a pesar del error, gracias al fragmento de try y catch.';