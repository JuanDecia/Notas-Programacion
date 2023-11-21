let elementos = ["Fuego", "Agua", "Tierra", "Aire", "Metal"];
let personas = ["Juan", "Sol", "Joan"];
let numeros = [2, 222, 543, 345, 15];

console.log(`LISTA DE ELEMENTOS: ${elementos.join(", ")}.`);
console.log(`LISTA DE PERSONAS: ${personas.join(", ")}.`);
console.log(`LISTA DE NUMEROS: ${numeros.join(", ")}.`);

console.log("");

// #################### EJEMPLO CONCAT #################### //

let listaElementos = document.getElementsByClassName('cont-lista');
listaElementos[0].innerHTML += 
    "Elementos en la lista Uno: " + elementos.join(", ") + ".";

listaElementos[1].innerHTML +=
    `Elementos en la lista Dos: ${numeros.join(", ")}.`

elementos.sort();

let elementosConNumeros = elementos.concat(numeros); // Concatenamos los arrays usando "concat()".

// Mostramos en el DOM y consola el resultado.

document.querySelector(".cont-concat").innerHTML +=
    `Listas concatenadas (unidas): ${elementosConNumeros.sort(function(a, b) {
        return b - a; })
    .join(", ")
    }.` // Utilizamos la función sort() para ordenar los numeros (mayor a menor) en el nuevo arreglo.

console.log(`%c#################### EJEMPLO CONCAT(): `, "color: #71B1C1");
console.log(elementosConNumeros); // (9) ['Fuego', 'Agua', 'Tierra', 'Aire', 2, 222, 543, 345, 15].
console.log("");

// #################### EJEMPLO LENGTH #################### //

listaElementos[2].innerHTML += `Elementos en la lista de "personas": ${personas.join(", ")}.`;

listaElementos[3].innerHTML = `Resultado esperado: ${personas.length}`;

console.log("%c#################### EJEMPLO LENGTH: ", "color: #71B1C1");
console.log(`${personas.length}`);
console.log("");

// #################### EJEMPLO POP #################### //

listaElementos[4].innerHTML += `Elementos en la lista de "personas": ${personas.join(", ")}.`;

let personasNuevo = personas; // creamos lista nueva para no modificar la original;
personasNuevo.pop();

listaElementos[5].innerHTML = `Resultado esperado: ${personasNuevo.join(", ")}.`;

console.log("%c#################### EJEMPLO POP(): ", "color: #71B1C1");
console.log(`Eliminamos el último elemento con el metodo pop (Joan): ${personasNuevo.join(", ")}.`);
console.log("");

// #################### EJEMPLO PUSH #################### //

console.log("%c#################### EJEMPLO PUSH(): ", "color: #71B1C1");
console.log(`Elementos en la lista "personas": ${personasNuevo.join(", ")}.`);

personasNuevo.push("Joan");
console.log(`Lista nueva con el elemento agregado "Joan": ${personasNuevo.join(", ")}.`);
console.log(`Lista ordenada: ${personasNuevo.sort().join(", ")}.`);

console.log("");

// #################### EJEMPLO SPLICE #################### //

console.log("%c#################### EJEMPLO SPLICE(): ", "color: #71B1C1");

console.log(`Continuamos trabajando con la lista 'personasNuevo' y vamos a reemplazar el valor del medio 'Juan' por un número y agregaremos un número en la posición final: \n\n`);

console.log(`Lista actual: ${personasNuevo.join(", ")}.`);

personasNuevo.splice(1, 1, 3);
personasNuevo.push(38);

console.log(`Lista nueva: ${personasNuevo.join(", ")}.`);
console.log("");

// #################### EJEMPLO SORT #################### //

console.log("%c#################### EJEMPLO SORT(): ", "color: #71B1C1");

let elementosOrdenado = elementos.sort(); // Ordenamos la lista de elementos
let numerosOrdenado = numeros.sort(); // Ordenamos lista de numeros standard

    // Sort en string
let contResultado = document.getElementsByClassName('cont-resultado');
contResultado[0].innerHTML = `Elementos string ordenados con sort(): ${elementosOrdenado.sort().join(", ")}.`;

    // Sort en numeros
contResultado[1].innerHTML = `Elementos Int ordenados con sort() sin parámetro: ${numerosOrdenado.join(", ")}.`;

    // Sort en numeros con parámetro
numerosOrdenado.sort((a, b) => a - b );
contResultado[2].innerHTML = `Elementos Int ordenacos con sort() con parámetro: ${numerosOrdenado.join(", ")}.`;

    // Sort en números con función fuera de los parámetros

function ordenarDecreciente(a, b) {
    return b - a;
}

numerosOrdenado.sort(ordenarDecreciente);
contResultado[3].innerHTML = 
`
    Elementos ordenados con función: ${numerosOrdenado.join(", ")};
`
    // Resultados en consola
console.log("Se ordena el arreglo de de elementos y números: \n\n");

console.log(`sort() en la lista de elementos: ${elementosOrdenado.join(", ")}.`);
console.log(`sort() en la lista de números (sin parámetro ni función): ${numerosOrdenado.join(", ")}.`);

console.log("");

console.log(`sort() en la lista de números con función en el respectivo parámetro: ${numerosOrdenado.sort((a, b) => a - b ).join(", ")}.`);
console.log(`sort() en la lista de números con función fuera de los parametros y luego llamada al respectivo: ${numerosOrdenado.sort(ordenarDecreciente).join(", ")}.`);

console.log("");

// #################### EJEMPLO EVERY #################### //

const ages = [32, 33, 16, 40];
contResultado[4].innerHTML = `Resultado esperado en consola: ${ages.every((age) => {return age > 10})}`

console.log("%c#################### EJEMPLO SORT(): ", "color: #71B1C1");
console.log("Resultado esperado: " + ages.every((age) => {return age > 10}));
console.log("");

// #################### EJEMPLO SOME #################### //

console.log("%c#################### EJEMPLO SOME(): ", "color: #71B1C1");

contResultado[5].innerHTML += elementos.some((elemento) => elemento === "Aire");

console.log(elementos);
console.log("Resultado buscando un elemento en el arrego: ");
elementos.some((elemento) => console.log(elemento === "Aire"));

console.log("");

// #################### EJEMPLO FILTER #################### //

console.log("%c#################### EJEMPLO FILTER(): ", "color: #71B1C1");

let elementosNuevo = ["Fuego", "Agua", "Tierra", "Aire", "Sonido", "Hielo", "Sombra", "Luz"];

let objetoPersonas = [

    {
        nombre: "Luis",
        edad: 20,
    },

    {
        nombre: "Ana",
        edad: 15,
    },

    {
        nombre: "Marcos",
        edad: 25,
    },
];

    // Filter en array
let masCaracteres = elementosNuevo.filter(elemento => elemento.length > 5);

contResultado[6].innerHTML = `Los elementos que tienen más de 5 caracteres son: 
    ${masCaracteres.sort().join(", ")}.
`;

elementosNuevo.filter((elemento) => {
    if (elemento.length > 5) {
        console.log(`El elemento ${elemento} tiene más de 5 caracteres.`);
    }
    else {
        console.log(`El elemento ${elemento} tiene menos de 5 caracteres.`);
    }
});

console.log("");

    // Filter en un arreglo con objeto
let mayorEdad = objetoPersonas.filter(persona => {return persona.edad > 18});

for (persona in mayorEdad) {

    // Resultado en DOM
    contResultado[7].innerHTML += mayorEdad[persona].nombre + ", ";

    // Resultado en consola
    console.log(mayorEdad[persona].nombre);
}

console.log("");

// #################### EJEMPLO FIND #################### //

console.log("%c#################### EJEMPLO FIND(): ", "color: #71B1C1");

let elementosFind = ["Fuego", "Tierra", "Agua", "Aire", "Metal", "Roca", "Lava", "Hielo"];

    // Resultados en DOM
elementosFind.find(elemento => {
    if (elemento != 'Aire') {

        // Resultado en consola
        console.log(elemento);

        // Resultado en DOM
        contResultado[8].innerHTML += elemento + " ";
    }
});

console.log("");

elementosFind.find(elemento => {
    if (elemento === 'Aire') {

        // Resultado en consola
        console.log(`El elemento que es igual a aire es: ${elemento}`);

        // Resultado en DOM
        contResultado[9].innerHTML = `El elemento seleccionado es: ${elemento}`;
    }
});

console.log("");

// #################### EJEMPLO FOREACH #################### //

console.log("%c#################### EJEMPLO FOREACH(): ", "color: #71B1C1");

let elementosEach = ["Fuego", "Tierra", "Agua", "Aire", "Metal", "Roca", "Lava", "Hielo"];

console.log("Elementos en el arreglo: ");
elementosEach.forEach(elemento => {

    // Resultado en consola
    console.log(elemento)

    // Resultado en DOM
    contResultado[10].innerHTML += `
    
        <ul>
            <li>${elemento}</li>
        </ul>
    `;

});

console.log("");

console.log("Elementos menores a 5 caracteres: ");
elementosEach.forEach(elemento => {

    if( elemento.length < 5 ) {

        // Resultado en consola
        console.log(elemento);

        // Resultado en DOM
        contResultado[11].innerHTML += `
    
        <ul>
            <li>${elemento}</li>
        </ul>
    `;
    }
})

console.log("");

// #################### EJEMPLO INCLUDES #################### //
console.log("%c#################### EJEMPLO FOREACH(): ", "color: #71B1C1");

let elementosIncludes = elementos;

    // Resultados en DOM
contResultado[12].innerHTML += `Este arreglo contiene 'Aire'?: ${elementosIncludes.includes('Aire')}.`;
contResultado[13].innerHTML += `Este arreglo contiene 'Rayo'?: ${elementosIncludes.includes('Rayo')}.`;

    // Resultados en consola
console.log("Trabajamos con el siguiente arreglo: " + elementosIncludes.join(", "));
console.log("");
console.log("Resultados con includes(): ")
console.log("Este arreglo contiene 'Aire'?: " + elementosIncludes.includes('Aire') + ".");
console.log("Este arreglo contiene 'Rayo'?: " + elementosIncludes.includes('Rayo') + ".");

console.log("");

// #################### EJEMPLO INDEXOF #################### //
console.log("%c#################### EJEMPLO INDEXOF(): ", "color: #71B1C1");

let elementosIndexOf = elementos;

    // Resultados en DOM
contResultado[14].innerHTML += `La posición de 'Rayo' es: ${elementosIndexOf.indexOf('Rayo')}.`;
contResultado[15].innerHTML += `La posición de 'Metal' es: ${elementosIndexOf.indexOf('Metal')}.`;

    // Resultados en consola
console.log("Trabajamos con el siguiente arreglo: " + elementosIndexOf.join(", ") + "\n\n");
console.log(`Ejemplo número negativo: \n`);
console.log(`La posición de 'Rayo' es: ${elementosIndexOf.indexOf('Rayo')}. \n\n`);
console.log(`Ejemplo encontrando la posición del elemento indicado: \n`);
console.log(`La posición de 'Metal' es: ${elementosIndexOf.indexOf('Metal')}.`);

console.log("");

// #################### EJEMPLO LASTINDEXOF #################### //
console.log("%c#################### EJEMPLO LASTINDEXOF(): ", "color: #71B1C1");

let elementosLast = ["Fuego", "Agua", "Tierra", "Aire", "Metal", "Tierra"];

console.log(`Elementos en la lista: ${elementosLast.join(", ")}.`);

    // Resultados en el DOM
contResultado[16].innerHTML += 
    `La primera posición del elemento duplicado ('Tierra') es: ${elementosLast.indexOf('Tierra')}. La posición del elemento duplicado es: ${elementosLast.lastIndexOf('Tierra')}.`;

    // Resultados en consola
console.log(`La primera posición del elemento duplicado ('Tierra') es: ${elementosLast.indexOf('Tierra')}. La posición del elemento duplicado es: ${elementosLast.lastIndexOf('Tierra')}.`);

console.log("");

// #################### EJEMPLO MAP #################### //
console.log("%c#################### EJEMPLO MAP(): ", "color: #71B1C1");

const empresa = [

    {
        id: 0,
        nombre: 'Javier',
        apellidos: "Gutierrez",
        edad: 27,
    },

    {
        id: 1,
        nombre: 'Pedro',
        apellidos: "Gonzales",
        edad: 37,
    },

    {
        id: 2,
        nombre: 'Rosa',
        apellidos: "Diaz",
        edad: 21,
    },

    {
        id: 3,
        nombre: 'Marisa',
        apellidos: "Garcia",
        edad: 32,
    },
]

    // Ejemplo en DOM
empresa.map(persona => {
    contResultado[17].innerHTML += `

            Id: ${persona.id} <br/>
            Nombre: ${persona.nombre} <br/>
            Apellidos: ${persona.apellidos} <br/>
            Edad: ${persona.edad} <br/> <br/>

    ` 
})

let edadSuma = empresa.map(personaEdad => {return personaEdad.edad + 10});

contResultado[18].innerHTML += `La edad de las personas ahora es: ${empresa[0].nombre} ${edadSuma[0]}.
    ${empresa[1].nombre} ${edadSuma[1]}.
    ${empresa[2].nombre} ${edadSuma[2]}.
    ${empresa[3].nombre} ${edadSuma[3]}.`

    // Ejemplo en consola
console.log("Recorriendo un arreglo de objetos con map(): ");

empresa.map(persona => {
    console.log(
        `Id: ${persona.id} \nNombre: ${persona.nombre} \nApellidos: ${persona.apellidos} \nEdad: ${persona.edad}\n`
    );
})

console.log("");

console.log(`Pasaron 10 años en la empresa, ahora las personas tienen las siguientes edades: `);

console.log(`${empresa[1].nombre} ${edadSuma[1]}.
${empresa[2].nombre} ${edadSuma[2]}.
${empresa[3].nombre} ${edadSuma[3]}.
`);

/*
for(i=0;i<empresa.length;i++) {
    console.log(empresa[i].id);
}
*/

console.log(" ");

// #################### EJEMPLO REDUCE #################### //
console.log("%c#################### EJEMPLO REDUCE(): ", "color: #71B1C1");

const numerosLista = [175, 50, 25];

let totalResta = numerosLista.reduce((acomulador, indice) => {return acomulador - indice} );
let totalSuma = numerosLista.reduce((acomulador, indice) => acomulador + indice, 20);

    // Resultado en DOM
contResultado[19].innerHTML += `Resultado esperado: ${totalResta}.`;
contResultado[20].innerHTML += `Resultado esperado: ${totalSuma}.`;

    // Resultado en consola
console.log("Tenemos el siguiente arreglo para aplicar el método reduce: " + numerosLista.join(", ") + ".");
console.log(`Aplicamos el method reduce para restar los valores desde el primer indice: ${totalResta}.`);

console.log("");

console.log("Tenemos el siguiente arreglo para aplicar el método reduce: " + numerosLista.join(", ") + ".");
console.log(`Aplicamos el method reduce para sumar los valores con un valor inicial de 20: ${totalSuma}.`);

console.log(" ");

// #################### EJEMPLO REVERSE #################### //
console.log("%c#################### EJEMPLO REVERSE(): ", "color: #71B1C1");

let listaReverse = elementos;
console.log(`Lista de elementos actual: ${listaReverse.join(", ")}.`);

listaReverse.reverse();

    // Ejemplo en DOM
contResultado[21].innerHTML += `Resultado esperado: ${listaReverse.join(", ")}.`;

    // Ejemplo en consola
console.log("Resultado esperado: " + listaReverse.join(", ") + ".");
console.log(" ");

// #################### EJEMPLO JOIN #################### //
console.log("%c#################### EJEMPLO JOIN(): ", "color: #71B1C1");

let listaJoin = elementos;
let tipoLista = listaJoin.join(", ");

    // Resultado DOM
contResultado[22].innerHTML += `La lista con nombre 'listaJoin' es de tipo: ${typeof listaJoin}.`;
contResultado[23].innerHTML += `La lista con nombre 'tipoLista' con el method join() es de tipo ${typeof tipoLista}.`

    // Resultado consola
console.log(`Lista 'listaJoin': `);
console.log(listaJoin);
console.log(`'listaJoin' es de tipo: ${typeof listaJoin}.`);
console.log(" ");

console.log(`Usamos el method join() para separar los elementos de la lista: `);
console.log(listaJoin.join(", ") + ".");
console.log(`Ahora la lista se convirtió en: ${typeof tipoLista}.`);
