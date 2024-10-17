const contResultado = document.getElementsByClassName("cont-resultado");

let numeroMaximo = prompt("Ingrese un valor máximo");
let convertir = parseInt(numeroMaximo);

let numero = 0;
let texto = "";
let contenedorPares = [];

if (numeroMaximo == '' || numeroMaximo == NaN) { 

    do {
        alert("No ha ingresado un valor correcto");
        numeroMaximo = prompt("Ingrese un valor máximo");
    } while (numeroMaximo == ' ');
    
} else {
    while (numero < (convertir + 1)) {
        if (numero % 2 == 0) {
            contenedorPares.push(numero);
        }

        numero++;

    }
}

let textoFinal = `Los numeros pares entre 0 y ${convertir} son: ${contenedorPares.join(", ")}.`;

contResultado[0].innerHTML += textoFinal;
console.log(textoFinal);
