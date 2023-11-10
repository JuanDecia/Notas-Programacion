// DOM
const contResultado = document.querySelector(".resultado-and");
const resultadoOr = document.querySelector('.resultado-or');
const resultadosNot = document.getElementsByClassName('resultado-not');

let lucas = 15;
let abril = 11;
let juan = 28;

// AND
console.log(`%c#################### EJEMPLO &&: `, "color: #71B1C1");

if (lucas && abril < 18) {
    console.log(`Los chicos son menores de edad.`);
    contResultado.innerHTML += "Los chicos son menores de edad.";
} else {
    console.log(`Uno o ambos de los chicos no es menor de edad.`);
    contResultado.innerHTML += "Uno o ambos de los chicos no es menor de edad.";
};

console.log("");

// OR
console.log(`%c#################### EJEMPLO ||: `, "color: #71B1C1");

if (lucas || abril || juan  > 18) {
    console.log("Pueden ingresar, uno de ellos es mayor.");
    resultadoOr.innerHTML += `Una de las personas es mayor de edad.`;
} else {
    console.log("No pueden ingresar, son todos menores.");
    resultadoOr.innerHTML += `Todos son menores.`;
}

console.log('');

// NOT
resultadosNot[0].innerHTML += `${!(juan > 0)}.`;
resultadosNot[1].innerHTML += `${!(juan < 0)}.`;
