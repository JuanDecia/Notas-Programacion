let objetoPersona = {
    nombre: 'Juan',
    apellido: 'Decia',
    edad: 28,
    idioma: 'es',
    set cambiarLang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get lang() {
        return this.idioma.toUpperCase();
    },
    get saludar() {
        return `Hola soy ${this.nombre} ${this.apellido}.`;
    },
};

// GET
console.log(`%c#################### EJEMPLO GET: `, "color: #71B1C1");
console.log(`Saludando usando el método GET: ${objetoPersona.saludar}`);

console.log("");

// SET
console.log(`%c#################### EJEMPLO SET: `, "color: #71B1C1");
objetoPersona.cambiarLang = 'en';
console.log(`Modificando un elemento con SET: ${objetoPersona.idioma}.`);