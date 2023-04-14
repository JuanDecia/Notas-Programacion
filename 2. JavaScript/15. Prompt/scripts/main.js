let contResultado = document.getElementsByClassName("cont-resultado");

let usuarioNombre = prompt("Ingrese su nombre por favor: ");

contResultado[0].innerHTML += `El usuario ingresó: ${usuarioNombre}.`;
console.log(`El usuario ingresó: ${usuarioNombre}.`);


