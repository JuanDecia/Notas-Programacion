// DOM
const contenedorResultado = document.getElementsByClassName('cont-resultado');
const ejemploSuma = document.getElementById('ejemplo-suma');

// #################### EJEMPLO FUNCION S/RETURN #################### //
console.log("%c#################### EJEMPLO FUNCION S/RETURN: ", "color: #71B1C1");

const cuentaSumar = (a, b) => {
    console.log(`La suma entre los dos numeros es: ${a + b}.`);
}

// Mostramos Resultados
contenedorResultado[0].innerHTML = `El resultado de la suma es ${cuentaSumar(5, 2)}.`;

cuentaSumar(5); // Error por falta de parámetro.

console.log(" ");

// #################### EJEMPLO FUNCION C/RETURN #################### //
console.log("%c#################### EJEMPLO FUNCION C/RETURN: ", "color: #71B1C1");

const cuentaMultiplicar = (a, b) => a * b;

const cuentaSumarReturn = (a, b) => a + b;

const cuentaSumarFlecha = (a, b) => a + b;


// Mostramos resultados
console.log(`El resultado de la multiplicación es: ${cuentaMultiplicar(5, 2)}.`);
contenedorResultado[1].innerHTML = `El resultado de la suma es ${cuentaMultiplicar(5, 2)}.`;
ejemploSuma.innerHTML = `El resultado de la suma es: ${cuentaSumarReturn(4, 5)}.`;

console.log(" ");

// #################### PARÁMETRO POR DEFECTO #################### //
console.log("%c#################### EJEMPLO PARAMETRO POR DEFECTO: ", "color: #71B1C1");

const multiplicarPorDefecto = (a, b = 1) => {
    return a * b
}

console.log(multiplicarPorDefecto(5, 2));
console.log(multiplicarPorDefecto(5));
console.log(multiplicarPorDefecto(5, undefined));

contenedorResultado[2].innerHTML = `El resultado de la multiplicación es: ${multiplicarPorDefecto(5, 2)}.`;
contenedorResultado[3].innerHTML = `El resultado de la multiplicación es: ${multiplicarPorDefecto(5)}.`;
contenedorResultado[4].innerHTML = `El resultado de la multiplicación es: ${multiplicarPorDefecto(5, undefined)}.`;

console.log(" ");

// #################### EJEMPLO SELF INVOKING #################### //
console.log("%c#################### EJEMPLO SELF INVOKING: ", "color: #71B1C1");

(function (a, b) {
    console.log(`El resultado de a + b es: ${a + b}.`);
})(3, 4);