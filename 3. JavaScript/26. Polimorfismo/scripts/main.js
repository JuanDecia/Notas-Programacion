let contResultado = document.getElementsByClassName("cont-resultado");

class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado nombre: ${this._nombre}; Sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, Depto: ${this._departamento}.`;
    }
}

function imprimirDatosClase(clase) {
    return clase.obtenerDetalles();
}

let empleado = new Empleado('Sol', 2500);
let gerente = new Gerente('Juan', 5000, 'Desarrollo');

contResultado[0].innerHTML += imprimirDatosClase(empleado);
contResultado[1].innerHTML += imprimirDatosClase(gerente);

console.log(imprimirDatosClase(gerente));
console.log(imprimirDatosClase(empleado));