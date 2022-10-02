let contResultado = document.getElementsByClassName("cont-resultado");

let n = 0;
let arregloNumeros = [];

// Realizamos el bucle y cada vez que se repita la sentencia guardamos el resultado en un arreglo para luego
// mostrarlo en el DOM.

while (n <= 10) {
    arregloNumeros.push(n);
    n++;
};

contResultado[0].innerHTML += "Resultado esperado: " + arregloNumeros.join(", ") + ".";

console.log("Guardamos el resultado del bucle 'n <= 10' dentro de un arreglo: \n");
console.log(arregloNumeros);

console.log("");

    // EJEMPLO 2: Creamos un contador y un acomulador para guardar en el acomulador el valor del contador de ese ciclo.
    // para visualizar mejor el ejemplo, los resultados son guardados en un arreglo.

let numero = 0;
let arregloAcomulador = [];
let x = 0;

while (numero < 3) {
    numero++;
    x += numero;
    arregloAcomulador.push(x);
}

contResultado[1].innerHTML += `Resultado del acomulador por cada vez que se repite el ciclo: ${arregloAcomulador.join(", ")}.`
contResultado[2].innerHTML += `Resultado final de x: ${x}.`

console.log("Guardamos el acomulador en un arreglo: ");
console.log(arregloAcomulador);
console.log("El resultado final de x es: " + x + ".");

    // EJEMPLO BREAK
let contador = 0;
while (contador < 10 ) {

    if (contador % 2 != 0) {
        console.log("Se encontró el primer número impar y se corta el bucle.");
        contResultado[3].innerHTML += `Se encontró el primer número impar '${contador}' y se corta el bucle.`
        break;
    } else {
        console.log("El contador está en: " + contador + ".");
        contResultado[3].innerHTML += `El contador está en ${contador}. <br />`
        contador++;
    };
    
};


