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

let gerente = new Gerente('Juan', 5000, 'Desarrollo');

contResultado[0].innerHTML += gerente.obtenerDetalles();
console.log(gerente.obtenerDetalles());