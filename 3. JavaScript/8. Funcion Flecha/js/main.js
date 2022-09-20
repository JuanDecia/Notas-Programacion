let contResultado = document.getElementsByClassName("cont-resultado");

const sumarValores = (a, b) => a + b;

contResultado[0].innerHTML += `El resultado de 5 + 6 es: ${sumarValores(5, 6)}.`;
console.log(sumarValores(5, 6));