let contResultado = document.getElementsByClassName("cont-resultado");

let lucas = 15;
let edadLucas = "15";
let abril = 11;
let juan = 28;

console.log("Variables a utilizar: ");
console.log(`Lucas tiene: ${lucas}.`);
console.log(`Abril tiene: ${abril}.`);


    // ES IGUAL 
console.log(`%c#################### EJEMPLO ==: `, "color: #71B1C1");

if (lucas == abril) {
    console.log(`Lucas tiene ${lucas}, Abril tiene ${abril}. El operador == dice que tienen la misma edad.`);
    contResultado[0].innerHTML += `Lucas tiene ${lucas}, Abril tiene ${abril}. El operador == dice que tienen la misma edad.`;
} else {
    console.log(`Lucas tiene ${lucas}, Abril tiene ${abril}. El operador == dice que tienen diferente edad.`);
    contResultado[0].innerHTML += `Lucas tiene ${lucas}, Abril tiene ${abril}. El operador == dice que tienen diferente edad.`;
};

console.log("");

console.log(`%c#################### EJEMPLO ===: `, "color: #71B1C1");
  
if (lucas === edadLucas) {
    console.log("La edad es del mismo tipo");
    contResultado[1].innerHTML += "La edad es del mismo tipo"
} else {
    console.log("La edad es de distinto tipo (false), porque, 'lucas' es de tipo int y 'edadLucas' es de tipo str.");
    contResultado[1].innerHTML += "La edad es de distinto tipo (false), porque, 'lucas' es de tipo int y 'edadLucas' es de tipo str."
};

console.log("");

    // ES DIFERENTE
console.log(`%c#################### EJEMPLO !=: `, "color: #71B1C1");

if (lucas != abril) {
    contResultado[2].innerHTML += `Las edades de Lucas y Abril son diferentes.`;
    console.log(`Las edades de Lucas y Abril son diferentes.`);
} else {
    contResultado[2].innerHTML += `Las edades de Lucas y Abril son iguales.`;
    console.log(`Las edades de Lucas y Abril son iguales.`);
}

console.log("");

    // MAYOR QUE
console.log(`%c#################### EJEMPLO ">": `, "color: #71B1C1");

if (lucas > abril) {
    contResultado[3].innerHTML += `Lucas es mayor que abril.`;
    console.log(`Lucas es mayor que abril.`);
} else {
    contResultado[3].innerHTML += `Lucas no es mayor que abril.`;
    console.log(`Lucas no es mayor que abril.`);
};

console.log("");

    // MENOR QUE
console.log(`%c#################### EJEMPLO "<": `, "color: #71B1C1");

if (lucas < abril) {
    contResultado[4].innerHTML += `Lucas es menor que abril.`;
    console.log(`Lucas es mayor que abril.`);
} else {
    contResultado[4].innerHTML += `Abril es menor que Lucas.`;
    console.log(`Abril es menor que Lucas.`);
};

console.log("");

    // MAYOR O IGUAL QUE
console.log(`%c#################### EJEMPLO ">=": `, "color: #71B1C1");

if (lucas >= abril) {
    contResultado[5].innerHTML += `Lucas es mayor que abril.`;
    console.log(`Lucas es mayor que abril.`);
} else {
    contResultado[5].innerHTML += `Lucas no es mayor que abril.`;
    console.log(`Lucas no es mayor que abril.`);
};

console.log("");

    // MENOR O IGUAL QUE
console.log(`%c#################### EJEMPLO "<=": `, "color: #71B1C1");

if (lucas <= abril) {
    contResultado[6].innerHTML += `Lucas es menor que abril.`;
    console.log(`Lucas es mayor que abril.`);
} else {
    contResultado[6].innerHTML += `Abril es menor que Lucas.`;
    console.log(`Abril es menor que Lucas.`);
};