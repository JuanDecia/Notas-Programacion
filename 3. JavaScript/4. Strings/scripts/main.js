let nombre = "Juan";
let apellido = "Decia";
let curso = "Javascript";

let contenedorFrase = document.getElementsByClassName('cont-frase');
contenedorFrase[0].innerHTML += `Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}`;

console.log("CONCATENANDO SIMPLE: ");
console.log(`Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}`);

console.log('');
/*
    1- Definir una función con nombre "saludar" que reciba 3 parametros (nombre, apellido y curso).
    2- Invocar la función para que retorne el saludo.
*/

function saludar(nombre, apellido, curso) {
    let saludo = `Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}.`;
    return saludo;
}

let contenedorFraseFuncion = document.getElementsByClassName('cont-frase');
contenedorFrase[1].innerHTML += `${saludar("Marcelo", "Decia", "Python")} `

console.log("RESULTADO CON FUNCION: ");
console.log(saludar("Marcelo", "Decia", "Python"));