// Función para colocar mayúscula
function mayusculas(palabra) {
    return palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase()
}

// Función para dividir nombre-apellido y limpiar espcios. Retorna la función que coloca mayus.
function procesarFila(fila){

    const arreglo = fila.split(" ");
    const nombre = arreglo[0].trim();
    const apellido = arreglo[1].trim();

    return mayusculas(nombre) + " " + mayusculas(apellido);

}

let nombre = "juan decia"
document.querySelector('.nombreComun').innerHTML += `${nombre}`;

document.querySelector('.nombreCorrecto').innerHTML += `${procesarFila(nombre)}.`
console.log(procesarFila(nombre));