    // ################## EJEMPLO SPLIT ################## //

// variables para split
const espacio = " ";
const coma = ",";

let nombreApellido = 'Luis Blanco';
let arregloNombreApellido = nombreApellido.split(espacio);
console.log("SPLIT SIMPLE: ")
console.log(arregloNombreApellido);

console.log('');
function dividirCadena(cadenaADividir, separador) {

    let arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas
}

let nombre = "Juan Marcelo Decia";
console.log("SPLIT EN FUNCIÓN: ");
console.log(dividirCadena(nombre, espacio));
console.log('');

    // ################## EJEMPLO SPLIT ################## //
