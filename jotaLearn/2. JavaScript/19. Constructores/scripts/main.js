let contResultado = document.getElementsByClassName('cont-resultado');

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
};

let padre = new Persona('Juan', 'Decia', 'juan@gmail.com');

for (valor in padre) {
    contResultado[0].innerHTML += padre[valor] + " ";
};

console.log(padre);