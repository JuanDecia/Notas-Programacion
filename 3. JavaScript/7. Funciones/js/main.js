// DOM
const contenedorResultado = document.getElementsByClassName('cont-resultado');

// #################### EJEMPLO FUNCION S/RETURN #################### //
console.log("%c#################### EJEMPLO FUNCION S/RETURN: ", "color: #71B1C1");

console.log(`Ejemplo sin utilizar return: `);

const cuentaSumar = (a, b) => {
    console.log(`La suma entre los dos numeros es: ${a + b}.`);
}

// Mostramos Resultados
cuentaSumar(5, 10);
contenedorResultado[0].innerHTML = `El resultado de la suma es ${cuentaSumar(5, 2)}.`;

console.log(" ");

// #################### EJEMPLO FUNCION C/RETURN #################### //
console.log("%c#################### EJEMPLO FUNCION C/RETURN: ", "color: #71B1C1");

function sumaResultado(a, b) {
    return a + b;
}

console.log(`El resultado de la suma es: ${sumaResultado(22, 43)}.`);
console.log(" ");

// #################### EJEMPLO INSTANCIANDO FUNCION #################### //
console.log("%c#################### EJEMPLO INSTANCIANDO FUNCION: ", "color: #71B1C1");

let resultadoA = sumaResultado(22, 54);
console.log(`El resultado de la variable 'resultadoA' es: ${resultadoA}.`);

let resultadoB = resultadoA;
console.log(`La variable 'resultadoB' contiene el valor de 'resultadoA' que es: ${resultadoB}.`);
console.log(" ");

// #################### EJEMPLO SELF INVOKING #################### //
console.log("%c#################### EJEMPLO SELF INVOKING: ", "color: #71B1C1");

(function (a, b) {
    console.log(`El resultado de a + b es: ${a + b}.`);
})(3, 4);