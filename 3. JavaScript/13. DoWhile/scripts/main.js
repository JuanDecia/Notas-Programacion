let contResultado = document.getElementsByClassName("cont-resultado");
let contador = 0;
let contadorArreglo = [];

do {

    contador += 1;
    contadorArreglo.push(contador);

} while (contador < 5);

contResultado[0].innerHTML += `Resultado esperado: ${contadorArreglo.join(", ")}.`;

