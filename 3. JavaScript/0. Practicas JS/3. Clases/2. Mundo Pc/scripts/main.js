class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor (tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++ Raton.contadorRatones;
    }

    get idRaton() {
        return this._idRaton;
    }

    toString() {
        return `Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}.`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}.`;
    }
}

class Monitor {

    static contadorMonitor = 0;

    constructor(marca, tamaño) {
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++ Monitor.contadorMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}.`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre,  monitor, raton, teclado) {
        this._idComputadora = ++ Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString() {
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++ Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let computadorasOrden = '';

        for (let computadora of this._computadoras) {
            computadorasOrden += ` \n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

// DOM
const tipoEntrada = document.getElementsByClassName('tipoEntrada');
const marca = document.getElementsByClassName('marca');
const tamaño = document.getElementsByClassName('tamaño');
const computadora = document.getElementsByClassName('computadora');

// Creamos variable de clase Raton
let ratonLogitech = new Raton('USB', 'Logitech');
let ratonRedDragon = new Raton('USB', 'RedDragon');

// Mostramos por consola y DOM
console.log(ratonLogitech.toString());
console.log("");
tipoEntrada[0].innerHTML = `${ratonLogitech._tipoEntrada}.`;
marca[0].innerHTML = `${ratonLogitech._marca}.`;

// Creamos variable de clase Teclado
let tecladoDragon = new Teclado('USB', 'RedDragon');
let tecladoNoga = new Teclado('USB', 'Noga');

// Mostramos por consola y DOM "teclado"
console.log(tecladoDragon.toString());
console.log("");
tipoEntrada[1].innerHTML = `${tecladoDragon._tipoEntrada}.`;
marca[1].innerHTML = `${tecladoDragon._marca}.`;

// Creamos variable de clase Monitor
let monitorLg = new Monitor('Lg', 18);
let monitorPhilips = new Monitor('Monitor', 32);

// Mostramos por consola y DOM "monitor"
console.log(monitorLg.toString());
console.log("");
marca[2].innerHTML = `${monitorLg._marca}.`;
tamaño[0].innerHTML = `${monitorLg._tamaño}.`;

// Creamos variable de tipo clase "Computadora"
let computadoraUno = new Computadora('Ryzen', monitorLg, ratonLogitech, tecladoDragon);

// Mostramos por consola y DOM "computadora"
console.log(`${computadoraUno}`);
console.log("");

computadora[0].innerHTML = `
    Computadora: ${computadoraUno._idComputadora}. <br />
    Procesador: ${computadoraUno._nombre}. <br />
    ${monitorLg} <br />
    ${ratonLogitech} <br />
    ${tecladoDragon}
`;



let computadoraDos = new Computadora('AMD', ratonRedDragon, tecladoNoga, monitorPhilips);

let ordenUno = new Orden();
ordenUno.agregarComputadora(computadoraUno);
ordenUno.agregarComputadora(computadoraDos);
ordenUno.mostrarOrden();