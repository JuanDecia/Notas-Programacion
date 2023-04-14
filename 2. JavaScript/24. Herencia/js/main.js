class Automovil {

    constructor(marca, modelo, fechaLanzamiento, gasolina, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.fechaLanzamiento = fechaLanzamiento;
        this.gasolina = gasolina;
        this.color = color;
    }

        // Getter
        get getMarca() {
            return this.marca
        }

        get getColor() {
            return this.color
        }

        // Setter
        set setMarca(marca) {
            this.marca = marca
        }

        set setColor(color) {
            this.color =color
        }

        // Methods

    velocidad(velocidad) {
        if (velocidad > 120) {
            return "Te pasaste de la velocidad Máxima"
        } else {
            return `Para alcanzar la velocidad máxima te faltan ${120 - velocidad}Km/h.`
        }
    }

        // Static Method (solo se puede usar con la clase "Automovil")
    static ruedas() {
        return `Tengo las ruedas de serie`
    }

}

class Nautica extends Automovil {

        // En el constructor nuevo, primero colocamos lo que se hereda y luego los nuevos atributos

    constructor(marca, modelo, materialCasco, tipoMotor) {
        super(marca, modelo)

        this.materialCasco = materialCasco;
        this.tipoMotor = tipoMotor;
    }

    velocidad(velocidad) {
        if (velocidad > 80) {
            return "Te pasaste de la velocidad Máxima"
        } else {
            return `Para alcanzar la velocidad máxima te faltan ${80 - velocidad}Km/h.`
        }
    }
}

const titanic = new Nautica('titanic', 'titanicModel', 'metal', 'carbon');

console.log(titanic.velocidad(60))
