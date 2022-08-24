let personas = ["Juan ", "Joan ", "Sol ", "Abril"];
document.querySelector('.cont-personas').innerHTML += `${personas}.`;

    // Seleccionando un elemento de la lista con su posición índice.

console.log(`Seleccionando un solo índice de la lista: ${personas[0]}`) 
document.querySelector('.cont-indiceCero').innerHTML += `${personas[0]}`; // Juan


console.log(" ")

    // RECORRIENDO LISTA CON "FOR".

console.log("Recorriendo la lista con for:")
for (let i=0; i < personas.length; i++ ) {

    document.querySelector('.cont-personasCiclo').innerHTML += `${personas[i]}`;
    console.log(personas[i]); // Nos retorna en consola todos los elementos de la lista
};

console.log(" ")

    // RECORRIENDO LISTA CON "FOR OF".

console.log(`Recorremos el arreglo pero con el metodo "for of":`)

for (nombre of personas) {   // Por cada variable local del arreglo retornar en consola
    
    document.querySelector('.cont-personasForOf').innerHTML += `${nombre}`;
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