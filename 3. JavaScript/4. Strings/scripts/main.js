let contResultado = document.getElementsByClassName("cont-resultado");

let nombre = "Juan";
let apellido = "Decia";
let curso = "Javascript";

console.log(`%c#################### CONCATENANDO STRINGS: `, "color: #71B1C1");

console.log(`Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}.`);
contResultado[0].innerHTML += `Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}.`;

console.log('');

/*
    1- Definir una función con nombre "saludar" que reciba 3 parametros (nombre, apellido y curso).
    2- Invocar la función para que retorne el saludo.
*/

function saludar(nombre, apellido, curso) {
    let saludo = `Hola ${nombre} ${apellido}, bienvenido al curso de ${curso}.`;
    return saludo;
}

console.log(saludar('Joan', 'Decia', 'Python'));
contResultado[1].innerHTML += `${saludar('Joan', 'Decia', 'Python')}.`;
