let contResultado = document.getElementsByClassName("cont-resultado");

// ###################### USANDO FOR
console.log(`%c#################### EJEMPLO FOR: `, "color: #71B1C1");

let arregloContador = []

for( let i = 0; i < 10; i++) {
    arregloContador.push(i);
};

console.log(`Resultado esperado del bucle for: ${arregloContador.join(", ")}.`);
contResultado[0].innerHTML += `${arregloContador.join(", ")}.`;

console.log("");

// ###################### RECORRIENDO UN ARREGLO CON FOR Y LENGTH()
console.log(`%c#################### RECORRIENDO UN ARREGLO CON FOR Y LENGTH(): `, "color: #71B1C1");

let facturas = [3, 4, 5, 6, 7];
let resultados = [];
let suma = 0;

for (let i = 0; i < facturas.length; i++) {
    suma += facturas[i];
    resultados.push(suma);
}

contResultado[1].innerHTML += `Resultados en cada iteración del bucle for: ${resultados.join(", ")}.`;
contResultado[2].innerHTML += `Resultado total de las facturas: ${suma}.`;

console.log(`Resultados en cada iteración del buclo for: ${resultados.join(", ")}.`);
console.log(`Resultado total de las facturas: ${suma}.`);
console.log("");

// ###################### RECORRIENDO UN ARREGLO CON FOR IN
console.log(`%c#################### RECORRIENDO UN ARREGLO CON FOR IN: `, "color: #71B1C1");

let sumaForIn = 0;

for (let i in facturas) {
    sumaForIn += facturas[i];
}

contResultado[3].innerHTML += `Resultado esperado: ${sumaForIn}.`;
console.log(`Resultado esperado: ${sumaForIn}.`);
console.log("");

// ###################### RECORRIENDO UN ARREGLO CON FOR OF
console.log(`%c#################### RECORRIENDO UN ARREGLO CON FOR OF: `, "color: #71B1C1");

let sumaForOf = 0;

for (elemento of facturas) {
    sumaForOf += elemento;
};

contResultado[4].innerHTML += `Resultado esperado: ${sumaForOf}.`;
console.log(`Resultado esperado: ${sumaForOf}.`);