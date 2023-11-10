let contResultado = document.getElementsByClassName("cont-resultado");

let edadJuan = 28;
let edadSol = 38;
let edadString = '28';

console.log("Variables a utilizar: ");
console.log(`Juan tiene: ${edadJuan} años.`);
console.log(`Sol tiene: ${edadSol}.`);

console.log('');

// ES IGUAL 
console.log(`%c#################### EJEMPLO ==: `, "color: #71B1C1");

if ( edadJuan == edadSol ) {
    console.log(`Juan y Sol tienen la misma edad, la condición retorna 'true'.`);
    contResultado[0].innerHTML += `Juan y Sol tienen la misma edad, la condición retorna 'true'.`;
} else {
    console.log(`Juan y Sol no tienen la misma edad, la condición retorna 'false'.`);
    contResultado[0].innerHTML += `Juan y Sol no tienen la misma edad, la condición retorna 'false'.`;
};

console.log("");

// COMPARACIÓN ESTRICTA

console.log(`%c#################### EJEMPLO ===: `, "color: #71B1C1");
  
if (edadJuan === edadString) {
    console.log("Las edades tienen el mismo valor.");
    contResultado[1].innerHTML += "Las edades tienen el mismo valor."; 
} else {
    console.log("Las edades son del mismo valor pero de distinto tipo (Retorna: false).");
    contResultado[1].innerHTML += "Las edades son del mismo valor pero de distinto tipo (Retorna: false).";
};

console.log("");

// DESIGUALDAD
console.log(`%c#################### EJEMPLO !=: `, "color: #71B1C1");

if (edadJuan != edadSol) {
    contResultado[2].innerHTML += `Las edades son diferentes.`;
    console.log(`Las edades son diferentes.`);
} else {
    contResultado[2].innerHTML += `Las edades son iguales.`;
    console.log(`Las edades son iguales.`);
};

console.log('');

// DESIGUALDAD ESTRICTA
console.log(`%c#################### EJEMPLO !==: `, "color: #71B1C1");

contResultado[3].innerHTML += `El valor de <b>'edadJuan'</b> y <b>28</b> son estrictamente iguales, por eso la sentencia es: <b>${edadJuan !== 28}</b>.`;

contResultado[4].innerHTML += `El valor de <b>'edadJuan'</b> y <b>'28'</b> son estrictamente diferentes, por eso la sentencia es: <b>${edadJuan !== '28'}</b>.`;

console.log(`El valor de 'edadJuan' y 28 son estrictamente iguales, por eso la sentencia es: ${edadJuan !== 28}.`);

console.log(`El valor de 'edadJuan' y '28' son estrictamente diferentes, por eso la sentencia es: ${edadJuan !== '28'}.`);

console.log("");

// MAYOR QUE
console.log(`%c#################### EJEMPLO ">": `, "color: #71B1C1");

contResultado[5].innerHTML += `El valor de la variable <b>'edadJuan'</b> es menor que el valor de la variable <b>'edadSol'</b>. El resultado de esta condición es: <b>${edadJuan > edadSol}</b>.`;

console.log(`El valor de la variable 'edadJuan' es menor que el valor de la variable 'edadSol'. El resultado de esta condición es: ${edadJuan > edadSol}.`);

console.log("");

// MENOR QUE
console.log(`%c#################### EJEMPLO "<": `, "color: #71B1C1");

contResultado[6].innerHTML += `El valor de la variable <b>'edadJuan'</b> es menor que el valor de la variable <b>'edadSol'</b>. El resultado de esta condición es: <b>${edadJuan < edadSol}</b>.`;

console.log("");

// MAYOR O IGUAL QUE
console.log(`%c#################### EJEMPLO ">=": `, "color: #71B1C1");

console.log(`El número 28 es igual o mayor que el valor de la variable 'edadJuan' por lo que la comparación retorna: ${28 >= edadJuan}`);

console.log("");

// MENOR O IGUAL QUE
console.log(`%c#################### EJEMPLO "<=": `, "color: #71B1C1");

console.log(`El número 28 es igual o mayor que el valor de la variable 'edadJuan' por lo que la comparación retorna: ${28 <= edadJuan}`);