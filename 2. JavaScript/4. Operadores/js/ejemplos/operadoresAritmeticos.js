// DOM
const contenedorSumas = document.getElementsByClassName('resultado-suma');
const contenedorRestas = document.getElementsByClassName('resultado-resta');
const contenedorMulplicaciones = document.getElementsByClassName('resultado-multiplicar');
const contenedorDivisiones = document.getElementsByClassName('resultado-dividir');
const contenedorModulos = document.getElementsByClassName('resultado-modulo');

let edadJuan = 28;

// SUMA
console.log(`%c#################### EJEMPLO SUMA: `, "color: #71B1C1");
contenedorSumas[0].innerHTML += `La suma entre <b>2 + 2</b> es igual a: <b>${2 + 2}</b>.`;
contenedorSumas[1].innerHTML += `Al valor de la variable <b>'edadJuan'</b> le sumamos con el operador <b>'+'</b> un valor de <b>'10'</b>. Entonces Juan tendrá: <b>${edadJuan + 10}</b>.`

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Ahora le sumamos con el operador '+' un valor de '10'. Entonces Juan tendrá: ${edadJuan + 10}.`);
console.log("");

// RESTA
console.log(`%c#################### EJEMPLO RESTA: `, "color: #71B1C1");

contenedorRestas[0].innerHTML += `La resta entre <b>2 - 2</b> es igual a: <b>${2 - 2}</b>.`;
contenedorRestas[1].innerHTML += `Restamos el valor de la variable <b>'edadJuan'</b> con el operador <b>'-'</b> un valor de <b>'10'</b>. Entonces Juan tendrá: <b>${edadJuan - 10}</b>.`;

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Restamos con el operador '-' un valor de '10'. Entonces Juan tendrá: ${edadJuan - 10}.`);
console.log("");

// MULTIPLICAR
console.log(`%c#################### EJEMPLO MULTIPLICAR: `, "color: #71B1C1");

contenedorMulplicaciones[0].innerHTML += `La multiplicación entre <b>2 * 2</b> es: <b>${2 * 2}</b>.`;
contenedorMulplicaciones[1].innerHTML += `Multiplicamos el valor de la variable <b>'edadJuan'</b> con el operador <b>'*'</b> un valor de <b>10</b>. Entonces Juan tendrá: <b>${edadJuan * 10}</b>.`;

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Multiplicamos con el operador '*' un valor de '10'. Entonces Juan tendrá: ${edadJuan * 10}.`);
console.log("");

// DIVISIÓN
console.log(`%c#################### EJEMPLO DIVISIÓN: `, "color: #71B1C1");

contenedorDivisiones[0].innerHTML += `La división entre <b>2 / 2</b> es: <b>${2 / 2}</b>.`;
contenedorDivisiones[1].innerHTML += `Dividimos el valor de la variable <b>'edadJuan'</b> con el operador <b>'/'</b> un valor de <b>10</b>. Entonces Juan tendrá: <b>'${edadJuan / 10}'</b>.`;

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Dividimos con el operador '/' un valor de '2'. Entonces Juan tendrá: ${edadJuan / 2}.`);
console.log("");

// MÓDULO
console.log(`%c#################### EJEMPLO MODULO: `, "color: #71B1C1");

contenedorModulos[0].innerHTML += `El resto entre <b>2 % 2</b> es: <b>${2 % 2}</b>.`;
contenedorModulos[1].innerHTML += `El resto entre el valor de la variable <b>'edadJuan'</b> y <b>'10'</b> es: <b>'${edadJuan % 10}'</b>.`;

console.log(`La edad de juan es: ${edadJuan}.`);
console.log(`Dividimos con el operador '/' un valor de '2'. Entonces Juan tendrá: ${edadJuan % 2}.`);
console.log("");

// INCREMENTO
const aumentarVariable = (variable) => {
    variable++;
    return `
    Aumentamos el valor de la variable con el <b>operador de incremento</b>, ahora la variable tiene el valor de: <b>${variable}</b>.
    `;
}
document.querySelector(".resultado-incremento").innerHTML += `${aumentarVariable(edadJuan)}`;

console.log(`%c#################### EJEMPLO INCREMENTO: `, "color: #71B1C1");

console.log(`La edad de juan es: ${edadJuan}.`);

console.log(`Incrementamos con el operador '++' el valor de '28' a '29'. Entonces, el incremento es: ${++edadJuan}.`);

console.log("");


