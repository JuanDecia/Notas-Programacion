// DOM
const contResultado = document.getElementsByClassName("cont-resultado");

// Iterando un arreglo de números con while

const listaNumeros = [3, 4, 5, 6, 7, 8];
console.log(`Arreglo a iterar: ${listaNumeros.join(", ")}.`)

contResultado[0].innerHTML += `Arreglo a iterar: ${listaNumeros.join(", ")}.`;

let i = 0;

while (i < listaNumeros.length) {

    listaNumeros[i]++; // Cada posición de la lista sumamos un valor.
    i++; // Sumamos el contador para finalizar el ciclo cuando "i" sea mayor que la cantidad de indices del arrelo "listaNumeros".
    
}

console.log(`Arreglo iterado con while y sumando '+1': ${listaNumeros.join(", ")}.`);
contResultado[1].innerHTML += `Arreglo iterado con while y sumando <b>'+1':</b> ${listaNumeros.join(", ")}.`;

// Iterando un arreglo de números con for
const arregloFor = [3, 4, 5, 6, 7, 8];

for (let i = 0; i < arregloFor.length; i++) {
    arregloFor[i]++; // Cada posicion del arreglo suma un valor
}

console.log(`Arreglo iterado con for y sumando '+1': ${arregloFor.join(", ")}.`);
contResultado[2].innerHTML += `Arreglo iterado con for y sumando <b>'+1':</b> ${arregloFor.join(", ")}.`;

