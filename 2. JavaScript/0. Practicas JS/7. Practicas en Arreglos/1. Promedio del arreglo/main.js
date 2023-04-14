// DOM
const contResultado = document.getElementsByClassName("cont-resultado");

let arreglo = [537, 11, 11];
console.log(`Tenemos el siguiente arreglo: ${arreglo}.`);

const media = (listaDeNumeros) => {

    // Contador para sumar los valores del array.
    let total = 0;

    // (1) Por cada valor en el indice del array "listaDeNumeros".
    for (numero of listaDeNumeros) {

        // (2) Sumamos el "total" que es igual al "total" actual "mas (+)" el "numero" del array 
        // que corresponda.
        total += numero; 
    };

    // Calculamos la longitud de la lista.
    let longitud = listaDeNumeros.length;

    // Calculamos la media.
    let media = total / longitud;

    return media;
};

let resultado = media(arreglo);

// Mostramos arreglo en DOM
contResultado[0].innerHTML += arreglo.join(", ") + ".";

console.log(`El promedio del arreglo es: ${resultado}`);
contResultado[1].innerHTML += `${resultado}.`;