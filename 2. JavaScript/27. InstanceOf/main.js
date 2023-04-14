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

function definirTipo(tipoClase) {

    console.log(tipoClase.obtenerDetalles());

    if (tipoClase instanceof Gerente) {
        console.log('Es un objeto de clase Gerente');
        contResultado[0].innerHTML += 'Es un objeto de tipo Gerente';
    }
    else if (tipoClase instanceof Empleado) {
        console.log('Es un objeto de clase Empleado');
        contResultado[1].innerHTML += 'Es un objeto de tipo Empleado';
    }
}

let empleado = new Empleado('Sol', 2500);
let gerente = new Gerente('Juan', 5000, 'Desarrollo');

definirTipo(empleado);
definirTipo(gerente);