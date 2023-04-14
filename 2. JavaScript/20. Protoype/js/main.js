    // Function orientada a objetos
function Tiburon(nombre, nombreCientifico) {
    this.nombre = nombre;
    this.nombreCientifico = nombreCientifico;
};

    // Agregamos la funcion para todos los objetos tiburon con prototype
Tiburon.prototype.atacar = function() {
    console.log('Cuidado no entre al agua');
};

    // Instanciamos y luego verificamos los datos
const martillo = new Tiburon('tiburon martillo', 'prionacle nauca');
console.log(martillo.atacar());

// ========================================================================================================

    // Heredar prototypes
function TiburonToro(nombre, nombreCientifico, peligrosidad) {
    this.super = Tiburon;
    this.super(nombre, nombreCientifico);
    this.peligrosidad = peligrosidad;
}

    // Instancia de TiburonToro
const costero = TiburonToro.prototype = new Tiburon()
TiburonToro.prototype.constructor = Tiburon

// ==========================================================================================================

    // Sobreescribiendo prototypes
TiburonToro.prototype.atacar = function() {
    console.log('Cuidado, Toro en las orillas no meterse al agua')
}

    // Metodo propio de TiburonToro
TiburonToro.prototype.mutilar = function() {
    console.log('Riesgo de amputación si se produce una ataque')
}

costero.atacar()
costero.mutilar()