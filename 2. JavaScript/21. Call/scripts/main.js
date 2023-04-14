let contResultado = document.getElementsByClassName("cont-resultado");

// Creando objeto persona
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.apellido = apellido;
};

// Usando prototype para agregar un saludo a todos los objetos persona
Persona.prototype.saludar = function() {
    return "Hola soy " + this.nombre + " " + this.apellido;
};

let usuarioUno = new Persona("Juan", "Decia", 28);
let usuarioDos = new Persona("Sol", "Vega", 38 );

console.log("Usuario 1: ");
console.log(usuarioUno);
console.log(" ");

console.log("Usuario 2: ");
console.log(usuarioDos);
console.log(" ");

console.log("Usuario 1 con los datos del usuario 2: ");
console.log(usuarioUno.saludar.call(usuarioDos));

// DOM
contResultado[0].innerHTML += "Valores del objeto Uno: " + usuarioUno.nombre + " " + usuarioUno.apellido + " " + usuarioUno.edad + "." ;
contResultado[1].innerHTML += "Valores del objeto Dos: " + usuarioDos.nombre + " " + usuarioDos.apellido + " " + usuarioDos.edad + "." ;
contResultado[2].innerHTML += "Usuario uno con valores del usuario dos usando call: " + usuarioUno.saludar.call(usuarioDos);