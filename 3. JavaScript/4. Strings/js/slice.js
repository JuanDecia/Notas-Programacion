let nombre = 'Juan'

document.querySelector('.cont-resultado').innerHTML += `${nombre.slice(1)}`; // Usamos la posición 1, es decir a partir de la 'u'.
console.log(nombre.slice(1));