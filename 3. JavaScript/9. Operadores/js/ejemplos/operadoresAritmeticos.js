let edadJuan = 28;

    // SUMA
console.log(`%c#################### EJEMPLO SUMA: `, "color: #71B1C1");
document.querySelector(".cont-suma").innerHTML += `Resultado: Ahora le sumamos con el operador '+' un valor de '10'. Entonces Juan tendrá: ${edadJuan + 10}.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Ahora le sumamos con el operador '+' un valor de '10'. Entonces Juan tendrá: ${edadJuan + 10}.`);
console.log("");

    // RESTA
console.log(`%c#################### EJEMPLO RESTA: `, "color: #71B1C1");

document.querySelector(".cont-resta").innerHTML += `Resultado: Restamos con el operador '-' un valor de '10'. Entonces Juan tendrá: ${edadJuan - 10}.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Restamos con el operador '-' un valor de '10'. Entonces Juan tendrá: ${edadJuan - 10}.`);
console.log("");

    // PRODUCTO - MULTIPLICAR
console.log(`%c#################### EJEMPLO PRODUCTO - MULTIPLICAR: `, "color: #71B1C1");

document.querySelector(".cont-multiplicacion").innerHTML += `Resultado: Multiplicamos con el operador '*' un valor de 10. Entonces Juan tendrá: ${edadJuan * 10}.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Multiplicamos con el operador '*' un valor de '10'. Entonces Juan tendrá: ${edadJuan * 10}.`);
console.log("");

    // DIVISIÓN
console.log(`%c#################### EJEMPLO DIVISIÓN: `, "color: #71B1C1");

document.querySelector(".cont-division").innerHTML += `Resultado: Dividimos con el operador '/' un valor de 2. Entonces Juan tendrá: ${edadJuan / 2}.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Dividimos con el operador '/' un valor de '2'. Entonces Juan tendrá: ${edadJuan / 2}.`);
console.log("");

    // MÓDULO
console.log(`%c#################### EJEMPLO MODULO: `, "color: #71B1C1");

document.querySelector(".cont-modulo").innerHTML += `Resultado: Calculamos con el operador '%' el módulo entre '28' y '2'. Entonces, el modulo es: ${edadJuan % 2}.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Dividimos con el operador '/' un valor de '2'. Entonces Juan tendrá: ${edadJuan % 2}.`);
console.log("");

    // INCREMENTO
console.log(`%c#################### EJEMPLO INCREMENTO: `, "color: #71B1C1");

console.log(`La edad de juan es: ${edadJuan}.`);
edadJuan++;

document.querySelector(".cont-incremento").innerHTML += `Resultado: Incrementamos con el operador '++' el valor de '28' a '29'. Entonces, el incremento es: ${edadJuan}.`

console.log(`Incrementamos con el operador '++' el valor de '28' a '29'. Entonces, el incremento es: ${edadJuan}.`);
console.log("");

    // DECREMENTO
console.log(`%c#################### EJEMPLO DECREMENTO: `, "color: #71B1C1");

edadJuan--;
console.log(`La edad de juan es: ${edadJuan}.`);

edadJuan--;

document.querySelector(".cont-decremento").innerHTML += `Realizamos un decremento a la variable "edadJuan" con el operador '--' el valor de '28' a '27'. Entonces, el decremento es: <b>${edadJuan}.`

