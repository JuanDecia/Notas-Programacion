const encabezadoEvento = (eventoNombre, eventoLugar) => {
    return `Evento: ${eventoNombre}. Lugar: ${eventoLugar}`;
}

console.log(encabezadoEvento("Taller de lectura", "Biblioteca"))
console.log(encabezadoEvento("Lectura de poemas", "Sala A"))

function borroEspacio(x) {
    return x.trim();
}

const limpiarNombreParticipante = (nombre, apellido) => {
    var nombreMinuscula = nombre.toLowerCase();
    var apellidoMayus = apellido.toUpperCase();
    return borroEspacio(apellidoMayus) + ", " + borroEspacio(nombreMinuscula);
}

console.log(limpiarNombreParticipante("JUAN ", "    DECIA"))