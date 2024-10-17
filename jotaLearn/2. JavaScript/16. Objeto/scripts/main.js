// Arreglo que toma la clase del DOM "cont-resultado"
let contResultado = document.getElementsByClassName("cont-resultado");

// OBJETO 1
let objetoPractica = {
    clave1: 'valor1',
    clave2: 4444,
    clave3: 'valor3',
};

// OBJETO 2
let objetoPersona = {
    nombre: 'Juan',
    apellido: 'Decia',
    edad: 28,
};

    // Accediendo a los valores de un objeto.
    
    //  EJEMPLO #1
console.log(`%c#################### EJEMPLO #1: `, "color: #71B1C1");

    // Opcion 1: desde la clave.
contResultado[0].innerHTML += `Accediendo a los valores a través de la clave: ${objetoPersona['nombre']}.`
console.log(`Accediendo al primer valor escogiendo la clave: ${objetoPersona['nombre']}.`);

console.log("");

    // EJEMPLO #2
console.log(`%c#################### EJEMPLO #2: `, "color: #71B1C1");

    // Opción 2: desde la estructura "objeto.clave".
contResultado[1].innerHTML += `Accediendo al primer valor de 'objetoPersona' con la estructura "nombreObjeto.clave": ${objetoPersona.nombre}.`;
contResultado[2].innerHTML += `Accediendo al segundo valor de 'objetoPersona' con la estructura "nombreObjeto.clave": ${objetoPersona.apellido}.`;

console.log(`Accediendo al primer valor de 'objetoPersona' con la estructura "nombreObjeto.clave": ${objetoPersona.nombre}.`);
console.log(`Accediendo al segundo valor de 'objetoPersona' con la estructura "nombreObjeto.clave": ${objetoPersona.apellido}.`);

console.log("");

    // Opción 3: Imprimendo solo el objeto.
console.log('Si imprimimos solo la variable del objeto: ');
contResultado[3].innerHTML += objetoPersona;
console.log(objetoPersona);
console.log("");

    // EJEMPLO #3: Cambiando los nombres de las claves.
console.log(`%c#################### EJEMPLO #3: `, "color: #71B1C1");

    // COPIANDO LOS VALORES DE LAS PROPIEDADES
let propiedad = 'nombre';

contResultado[4].innerHTML += `Realizamos la copia de la clave-nombre: ${objetoPersona[propiedad]}.`;
console.log(`Realizamos la copia de la clave-nombre: ${objetoPersona[propiedad]}.`);

console.log("");

contResultado[5].innerHTML += `Llamando "objetoPersona[propiedad]", resultado: <b>${objetoPersona[propiedad]}</b>.`;
contResultado[6].innerHTML += `Llamando "propiedad", resultado: <b>${propiedad}</b>.`;
contResultado[7].innerHTML += `Llamando "objetoPersona['nombre']", resultado: <b>${objetoPersona['nombre']}</b>.`;

console.log(`Llamando "objetoPersona[propiedad]", resultado: ${objetoPersona[propiedad]}.`);
console.log(`Llamando "objetoPersona[propiedad]", resultado: ${propiedad}.`);
console.log(`Llamando "objetoPersona[propiedad]", resultado: ${objetoPersona.nombre}.`);

console.log("");

    // EJEMPLO #4: Cambiando los valores de las propiedades
console.log(`%c#################### EJEMPLO #4: `, "color: #71B1C1");

objetoPersona['nombre'] = 'Joan';

contResultado[8].innerHTML += `Cambiamos el valor de la propiedad 'nombre' del objeto 'objetoPersona' por Joan. Ahora el valor es: <b>${objetoPersona.nombre}</b>.`;
console.log(`Cambiamos el valor de la propiedad 'nombre' a: ${objetoPersona.nombre}.`);

console.log("");

    // EJEMPLO #5
console.log(`%c#################### EJEMPLO #5: `, "color: #71B1C1");

let arregloClaves = [];

for (clave in objetoPersona) {
    arregloClaves.push(clave);
};

console.log(`Claves en la variable objeto: ${arregloClaves.join(", ")}.`);
contResultado[9].innerHTML += `Claves en el objeto: ${arregloClaves.join(", ")}.`

for (clave in objetoPersona) {
    contResultado[10].innerHTML += `Valor de la clave ${clave}: ${objetoPersona[clave]}. <br />`;
}

let personasArreglo = Object.values(objetoPersona);

console.log(`Imprimiendo con object.values: ${personasArreglo.join(", ")}.`);
contResultado[11].innerHTML += "Imprimiendo solo los valores: " + personasArreglo.join(", ") + ".";

let personasJson = JSON.stringify(objetoPersona);

console.log(`Imprimimos el objeto transformado con JSON: `);
console.log(objetoPersona);


console.log("");