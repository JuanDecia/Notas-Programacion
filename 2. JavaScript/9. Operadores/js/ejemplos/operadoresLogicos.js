    // AND
console.log(`%c#################### EJEMPLO &&: `, "color: #71B1C1");

let contResultado = document.getElementsByClassName("cont-resultado");

let lucas = 15;
let abril = 11;
let juan = 28;

if (lucas && abril < 18) {
    console.log(`Los chicos son menores de edad.`);
    contResultado[0].innerHTML += "Los chicos son menores de edad.";
} else {
    console.log(`Uno o ambos de los chicos no es menor de edad.`);
    contResultado[0].innerHTML += "Uno o ambos de los chicos no es menor de edad.";
};

console.log("");

    // OR
console.log(`%c#################### EJEMPLO ||: `, "color: #71B1C1");

if (lucas || abril || juan  > 18) {
    console.log("Pueden ingresar, uno de ellos es mayor.");
} else {
    console.log("No pueden ingresar, son todos menores.");
};
