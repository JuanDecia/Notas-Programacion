// DOM
const contenedorResultado = document.getElementsByClassName('cont-resultado');

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

const cuentaMultiplicar = (a, b) => {
    return a * b 
};


// Mostramos resultados
console.log(`El resultado de la multiplicación es: ${cuentaMultiplicar(5, 2)}.`);
contenedorResultado[1].innerHTML = `El resultado de la suma es ${cuentaMultiplicar(5, 2)}.`;

console.log(" ");

// #################### PARÁMETRO POR DEFECTO #################### //

const multiplicarPorDefecto = (a, b = 1) => {
    return a * b
}

// #################### EJEMPLO SELF INVOKING #################### //
console.log("%c#################### EJEMPLO SELF INVOKING: ", "color: #71B1C1");

(function (a, b) {
    console.log(`El resultado de a + b es: ${a + b}.`);
})(3, 4);