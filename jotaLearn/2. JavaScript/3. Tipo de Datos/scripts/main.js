let contenedorResultado = document.getElementsByClassName('cont-resultado');
const contUndefined = document.querySelector('.resultado-undefined');
const resultadoNull = document.querySelector('.cont-valorNull');

// SECCION INT
let numeroCinco = 5;
contenedorResultado[0].innerHTML += `Variable <b>'numeroCinco'</b> con valor <b>'${numeroCinco}'</b> es de tipo <b>'${typeof numeroCinco}'</b>.`;
console.log(`%c#################### Dato INT: `, "color: #71B1C1");
console.log(`Variable 'numeroCinco' con valor '${numeroCinco}' es de tipo '${typeof numeroCinco}'.`);

console.log('');

// SECCION FLOAT
let numeroFloat = 0.5;
contenedorResultado[1].innerHTML += `Variable <b>'numeroFloat'</b> con valor <b>'${numeroFloat}'</b> es de tipo <b>'${typeof numeroFloat}'</b>.`;
console.log(`%c#################### Dato FLOAT: `, "color: #71B1C1");
console.log(`Variable 'numeroFloat' con valor '${numeroFloat}' es de tipo '${typeof numeroFloat}'.`);

console.log('');

// SECCION STRING
let texto = 'Soy una cadena de caracteres';
contenedorResultado[2].innerHTML += `Variable <b>texto</b> con valor: <b>${texto}</b> es de tipo <b>'${typeof texto}'</b>.`;
console.log(`%c#################### Dato STRING: `, "color: #71B1C1");
console.log(`Variable 'tipoString' es de tipo '${typeof tipoString}'.`);

console.log('');

// ARRAY
let colores = ["Rojo", "Blanco", "Negro"];

contenedorResultado[3].innerHTML += `Variable <b>'colores'</b> es de tipo: <b>${typeof colores}</b>.`;
console.log(`%c#################### Dato ARRAY: `, "color: #71B1C1");
console.log(`Variable 'colores' es de tipo: ${typeof colores}.`);

console.log('');

// SECCION OBJETO
let objetoPersona = {
    Altura: "1.60", 
    ColorDeOjos: "cafe",
};

contenedorResultado[4].innerHTML += `Variable <b>'objetoPersona'</b> es de tipo: <b>'${typeof objetoPersona}'</b>.`;
console.log(`%c#################### Dato OBJETO: `, "color: #71B1C1");
console.log(`Variable 'objetoPersona' es de tipo: '${typeof objetoPersona}'.`);

console.log('')

// SECCIÓN BOOLEAN
let estaActivo = true;

contenedorResultado[5].innerHTML += `Variable <b>'estaActivo'</b> es de tipo: <b>'${typeof estaActivo}'</b>.`;
console.log(`%c#################### Dato OBJETO: `, "color: #71B1C1");
console.log(`Variable 'estaActivo' es de tipo: '${typeof estaActivo}'.`);

console.log('');

// IS NAN
let numeroString = 'numeroCinco';
contenedorResultado[6].innerHTML += `Pedimos por parámetro un número y pasamos un string, el resultado es: <b>${parseInt(numeroString)}</b>.`;
console.log(`%c#################### Dato NAN: `, "color: #71B1C1");
console.log(`Pedimos por parámetro un número y pasamos un string, el resultado es: ${parseInt(numeroString)}.`);

console.log("");

// UNDEFINED
let noDefinido;

contUndefined.innerHTML += `Valor de la variable <b>'noDefinido'</b> es de tipo <b>${noDefinido}</b>.`;
console.log(`%c#################### Dato UNDEFINED: `, "color: #71B1C1");
console.log(`Valor de la variable <b>'noDefinido'</b> es de tipo <b>${noDefinido}</b>.`);

console.log("");

// NULL
let valorNull = null;

resultadoNull.innerHTML += `Valor de la variable <b>'valorNull'</b> es: <b>'${valorNull}'</b>.`;
console.log(`%c#################### Dato NULL: `, "color: #71B1C1");
console.log(`Valor de la variable 'valorNull' es: '${valorNull}'.`);

console.log("");

// CAMBIAR TIPO DE DATO CON PARSEINT()
console.log(`%c#################### CAMBIAR TIPO DE DATO: `, "color: #71B1C1");

let numeroLetra = '25';

// Convertimos 25 string por 25 int
let numeroConvertido = parseInt(numeroLetra);
let usandoNumber = Number(numeroLetra);

contenedorResultado[7].innerHTML += `La variable <b>'numeroLetra'</b> con valor '${numeroLetra}' es tipo <b>'${typeof(numeroLetra)}</b>'.`;
console.log(`La variable 'numeroLetra' con valor: '${numeroLetra}' es de tipo '${typeof numeroLetra}'.`);

contenedorResultado[8].innerHTML += `La variable <b>'numeroLetra'</b> fue ingresada al method <b>'parseInt()'</b>. Ahora, <b>'${numeroConvertido}'</b> es de tipo <b>'${typeof numeroConvertido}'</b>.`;

console.log(`La variable 'numeroLetra' fue ingresada al method 'parseInt()'. Ahora, '${numeroConvertido}' es de tipo '${typeof numeroConvertido}'.`);

contenedorResultado[9].innerHTML += `La variable <b>'numeroLetra'</b> fue ingresada al method <b>'Number()'</b>. Ahora, <b>'${usandoNumber}'</b> es de tipo <b>'${typeof usandoNumber}'</b>.`;

console.log(`La variable 'numeroLetra' fue ingresada al method 'Number()'. Ahora, '${usandoNumber}' es de tipo '${typeof usandoNumber}'.`);

console.log('');

// TYPEOF
console.log(`%c#################### TYPEOF: `, "color: #71B1C1");

let elementos = ['Fuego', 'Tierra', 'Agua', 'Aire'];

contenedorResultado[10].innerHTML += `Variable <b>'elementos'</b> es de tipo: <b>${typeof elementos}</b>.`;
console.log(`Variable 'elementos' es de tipo: ${typeof elementos}.`);
