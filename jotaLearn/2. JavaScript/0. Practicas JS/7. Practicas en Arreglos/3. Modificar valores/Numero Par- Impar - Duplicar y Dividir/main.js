/* DOM */
const arreglo = document.getElementsByClassName('arreglo');
const arregloDuplicado = document.getElementsByClassName('arregloDuplicado');
const spanImpares = document.getElementsByClassName('numerosImpares');
const duplicarYDividir = document.getElementsByClassName('duplicarYDividir');

let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [6, 7, 11, 8];

arreglo[0].innerHTML += arreglo1.join(', ');
arreglo[1].innerHTML += arreglo2.join(', ');

    /* Duplica arreglo */

const agregarDoble = (arreglo) => {
    let doble = arreglo.map(x => {
        return x * 2;
    })
    return doble;
}

arregloDuplicado[0].innerHTML += agregarDoble(arreglo1) + '.';
arregloDuplicado[1].innerHTML += agregarDoble(arreglo2) + '.';

console.log(agregarDoble(arreglo1)); // [2, 4, 6, 8, 10] //
console.log(agregarDoble(arreglo2)); // [2, 4, 8, 16] //


    /* Buscar Impares */

const numerosImpares = (arreglo) => {
    let impar = arreglo.filter(x => {
        return x % 2 != 0;
    })
    return impar;
}

spanImpares[0].innerHTML += numerosImpares(arreglo1);
spanImpares[1].innerHTML += numerosImpares(arreglo2);

console.log(numerosImpares(arreglo1)); // [1, 3, 5] //
console.log(numerosImpares(arreglo2)); // [1] //


    /* En un arreglo duplicar si es par, devolver la mitad si es impar */

const duplicarODividir = (arreglo) => {
    let resultado = arreglo.map(x => {
        if (x % 2 != 0) {
            return x * 2;
        } else {
            return x / 2;
        }
    })
    return resultado;
}

duplicarYDividir[0].innerHTML += duplicarODividir(arreglo1);
duplicarYDividir[1].innerHTML += duplicarODividir(arreglo2);

console.log(duplicarODividir(arreglo1));
console.log(duplicarODividir(arreglo2));
