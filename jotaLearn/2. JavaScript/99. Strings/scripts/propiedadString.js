// SCRIPTS EJEMPLOS
let contResultado = document.getElementsByClassName("cont-resultado");

// EJEMPLO LENTH
console.log(`%c#################### STRING.LENGTH: `, "color: #71B1C1");

let cadenaTexto = 'Cadena de texto';
console.log(`La variable 'cadenaTexto' tiene: ${cadenaTexto.length} caracteres.`);
contResultado[0].innerHTML += `La variable 'cadenaTexto' tiene: ${cadenaTexto.length} caracteres.`;

console.log("");

// EJEMPLO TOLOWERCASE
console.log(`%c#################### TOLOWERCASE: `, "color: #71B1C1");

let textoMayus = 'TEXTO EN MAYUS';
console.log(`Convertimos 'TEXTO EN MAYUS' a minúscula: ${textoMayus.toLowerCase()}.`);
contResultado[1].innerHTML += `Convertimos 'TEXTO EN MAYUS' a minúscula: ${textoMayus.toLowerCase()}.`;

console.log("");

// EJEMPLO TOUPPERCASE
console.log(`%c#################### TOUPPERCASE: `, "color: #71B1C1");

let textoMinuscula = 'texto en minúscula';
console.log(`Convertimos el 'texto en minúscula' a mayúscula; ${textoMinuscula.toUpperCase()}.`);
contResultado[2].innerHTML += `Convertimos el 'texto en minúscula' a mayúscula; ${textoMinuscula.toUpperCase()}.`;

console.log("");

// EJEMPLO SPLIT
console.log(`%c#################### SPLIT: `, "color: #71B1C1");

const espacio = " ";

let nombreApellido = 'Luis Blanco';
let arregloNombreApellido = nombreApellido.split(espacio);

console.log("SPLIT SIMPLE: ")
console.log(`Cadena a dividir: ${nombreApellido}.`);
console.log(arregloNombreApellido);

console.log('');

function dividirCadena(cadenaADividir, separador) {

    let arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas.join(" ");
}

let nombre = "Juan Marcelo Decia";
console.log(`SPLIT EN FUNCIÓN: Cadena a dividir ${nombre}.`);
console.log(dividirCadena(nombre, espacio));
contResultado[3].innerHTML += `Resultado: ${dividirCadena(nombre, espacio)}.`;


console.log('');

// EJEMPLO TRIM
console.log(`%c#################### TRIM(): `, "color: #71B1C1");

let frase = '     eliminando espacios en blanco        ';

console.log('SIN ELIMINAR ESPACIOS: ');
console.log(frase);
contResultado[4].innerHTML += `Frase a remover espacios: ${frase}`;

console.log('');

console.log('ESPACIOS ELIMINADOS: ');
console.log(frase.trim());
contResultado[5].innerHTML += `Espacios Removidos: ${frase.trim()}`;

console.log("");

// EJEMPLO CHARAT()
console.log(`%c#################### CHAR AT(): `, "color: #71B1C1");

    // Función para colocar mayúscula
function mayusculas(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase()
}

    // Función para dividir nombre-apellido y limpiar espcios. Retorna la función que coloca mayus.
function procesarFila(fila){

    const arreglo = fila.split(" ");
    const nombre = arreglo[0].trim();
    const apellido = arreglo[1].trim();

    return mayusculas(nombre) + " " + mayusculas(apellido);
}

let nombrePersona = "juan decia";

console.log(`Nombre y Apellido: ${procesarFila(nombrePersona)}.`);
contResultado[6].innerHTML += `Nombre y Apellido: ${procesarFila(nombrePersona)}.`;

console.log("");

// EJEMPLO SLICE()
console.log(`%c#################### SLICE(): `, "color: #71B1C1");

let nombreSlice = 'Juan';

console.log(nombreSlice.slice(1));

contResultado[7].innerHTML += `Palabra dividida: ${nombreSlice.slice(1)}.`;