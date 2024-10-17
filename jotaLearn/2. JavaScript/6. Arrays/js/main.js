let personas = ["Juan", "Joan", "Sol", "Abril"];
let contResultado = document.getElementsByClassName("cont-resultado");
document.querySelector('.cont-personas').innerHTML += `${personas.join(", ")}.`;

// #################### VISUALIZAR ELEMENTOS DE UNA LISTA #################### //
console.log(`%c#################### VISUALIZAR ELEMENTOS DE UNA LISTA: `, "color: #71B1C1");

contResultado[0].innerHTML += personas.join(", ");
console.log(personas);

console.log("");

// #################### SELECCIONANDO UN ELEMENTO DE LA LISTA #################### //
console.log(`%c#################### SELECCIONANDO UN ELEMENTO DE LA LISTA: `, "color: #71B1C1");

console.log(`Seleccionando un solo índice de la lista: ${personas[0]}`) 
document.querySelector('.cont-indiceCero').innerHTML += `${personas[0]}`; // Juan

console.log(" ")

// #################### AGREGAR ELEMENTOS #################### //
console.log(`%c#################### AGREGANDO ELEMENTOS: `, "color: #71B1C1");

console.log("Lista anterior: " + personas.join(", "));

    // Resultado DOM
personas.push("Lucas");
contResultado[1].innerHTML += "Resultado esperado: " +  personas.join(", ");

    // Resultado en consola
console.log("Lista usando Push(): " + personas.join(", "));
console.log("");

personas.pop();
console.log("Lista anterior: " + personas.join(", "));

personas[personas.length] = 'Lucas';

    // Resultado en DOM
contResultado[2].innerHTML += "Resultado esperado: " + personas.join(", ");

    // Resultado en consola
console.log("Lista usando length: " + personas.join(", "));

console.log("");
personas.pop();

console.log("Lista anterior: " + personas.join(", "));
personas[4] = 'Lucas';

    // Resultado en DOM
contResultado[3].innerHTML += "Resultado esperado: " + personas.join(", ");

    // Resultado en consola
console.log("Resultado con índice: " + personas.join(", "));


console.log("");

// #################### RECORRER LISTA CON FOR #################### //
console.log(`%c#################### RECORRIENDO LISTA CON FOR: `, "color: #71B1C1");

for (let i=0; i < personas.length; i++ ) {

    //  Resultado en DOM
    document.querySelector('.cont-personasCiclo').innerHTML += `${personas[i]}, `;

    // Resultado en consola
    console.log(personas[i]);

    // Ambas muestran los elementos que componen la lista.
};

console.log("");

console.log("Mostramos solo los índices: ");
for (let i=0; i < personas.length; i++ ) {

    //  Resultado en DOM
    contResultado[4].innerHTML += `${i}, `;

    // Resultado en consola
    console.log(i); 

    // Ambas muestran solo los índices.
};

console.log(" ")

    // RECORRIENDO LISTA CON "FOR OF".

console.log(`Recorremos el arreglo pero con el metodo "for of":`)

for (nombre of personas) {   // Por cada variable local del arreglo retornar en consola
    
    document.querySelector('.cont-personasForOf').innerHTML += `${nombre}, `;
    console.log(nombre);
}

console.log('');

// Un array es una lista de elementos. Estos elementos pueden ser de varios "tipos de datos".

let nombresEdades = ["Juan","Sol","Joan",[27,37,2]];

for (nombre of nombresEdades) {
    document.querySelector('.arreglo-combinado').innerHTML += `${nombre} `;
    console.log(nombre);
}

console.log("");
// SELECCIONANDO UN VALOR DEL ARREGLO INTEGRADO

console.log(`Accediendo a la segunda posición del arreglo integrado: ${nombresEdades[3][1]}`); // 37
document.querySelector('.resultado-combinado').innerHTML += `${nombresEdades[3][1]}`;

console.log("");

// DESTRUCTURANDO ARREGLOS

let destructurandoPersonas = document.getElementsByClassName("cont-personas");
destructurandoPersonas[1].innerHTML += `${personas}`;

let [Juan, Sol, Joan, Abril] = personas; // Destructurando el array: Pasamos los strings como valores y luego le instanciamos el NOMBRE DEL ARRAY.

console.log("DESTRUCTURANDO ARREGLO 'NOMBRES': ");
let resultado = document.getElementsByClassName('resultado');
resultado[0].innerHTML += `${Juan}`;
console.log(Juan);