let contResultado = document.getElementsByClassName("cont-resultado");

class Persona {
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this.edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

}

let personaJuan = new Persona("Juan", "Decia", 28);

contResultado[0].innerHTML += `Valor de nombre usando get: ${personaJuan.nombre}.`;
console.log(`Valor de nombre usando get: ${personaJuan.nombre}.`);

personaJuan.nombre = "Sol";

contResultado[1].innerHTML += `Cambiamos valor de nombre usando set: ${personaJuan.nombre}.`;
console.log(`Cambiamos valor de nombre usando set: ${personaJuan.nombre}.`);

