let contResultado = document.getElementsByClassName("cont-resultado");

class Persona {
    constructor (nombre, apellido, edad, mail) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
    }
}

let personaJuan = new Persona('Juan', 'Decia', 28, 'juan@gmail.com');
let personaSol = new Persona('Sol', 'Vega', 38, 'sol@gmail.com');

// RESULTADO EN DOM
for (valor in personaJuan) {
    contResultado[0].innerHTML += 
    `<li>
        Valor: ${personaJuan[valor]}.
    </li>`
};

for (valor in personaSol) {
    contResultado[1].innerHTML += 
    `<li>
        Valor: ${personaSol[valor]}.
    </li>`
};

// RESULTADO EN CONSOLA
console.log("Instancia de clase creada en un objeto: ");
console.log(personaJuan);
console.log("");

console.log("Instancia de clase creada en un objeto: ");
console.log(personaSol);