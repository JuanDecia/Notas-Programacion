let personas = [
    {
        nombre: "juan",
        edad: 28,
    },
    {
        nombre: "sol",
        edad: 38,
    },
    {
        nombre: "lucas",
        edad: 15,
    },
    {
        nombre: "abril",
        edad: 11,
    },
    {
        nombre: "joan",
        edad: 3,
    },
];

    // Ejemplo DOM
let contPersonas = document.getElementsByClassName("cont-persona");

for (i = 0; i < personas.length; i++) {
    contPersonas[0].innerHTML += `Nombre: ${personas[i].nombre} | Edad: ${personas[i].edad}. <br>`;
}

for (i = 0; i < personas.length; i++) {
    if (personas[i].edad > 18 ) {
        contPersonas[1].innerHTML += `El usuario es mayor de edad: ${personas[i].nombre}, tiene ${personas[i].edad} años. <br />`;
    }
    else {
        contPersonas[1].innerHTML += `El usuario es menor de edad: ${personas[i].nombre}, tiene ${personas[i].edad} años. <br />`;
    }
};

    // Ejemplo Consola

console.log(`Los usuarios son: `);
console.log(personas);
console.log("");

for (i = 0; i < personas.length; i++) {
    if (personas[i].edad > 18 ) {
        console.log(`El usuario es mayor de edad: ${personas[i].nombre}, tiene ${personas[i].edad} años.`);
    }
    else {
        console.log(`El usuario es menor de edad: ${personas[i].nombre}, tiene ${personas[i].edad} años.`);
    }
};


