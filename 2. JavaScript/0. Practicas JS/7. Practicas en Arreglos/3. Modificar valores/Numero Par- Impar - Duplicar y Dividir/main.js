/* DOM */
const arreglo = document.getElementsByClassName('arreglo');

let arreglo1 = [1,2,3,4,5];
let arreglo2 = [1,2,4,8];

arreglo[0].innerHTML += arreglo1.join(', ');
arreglo[1].innerHTML += arreglo2.join(', ');

    /* Duplica arreglo */

const agregarDoble = (arreglo) => {
    let doble = arreglo.map(x => {
        return x * 2;
    })
    return doble;
}

console.log(agregarDoble(arreglo1)); // [2, 4, 6, 8, 10] //
console.log(agregarDoble(arreglo2)); // [2, 4, 8, 16] //


    /* Función para buscar los números impares de un arreglo */

const numerosImpares = (arreglo) => {
    let impar = arreglo.filter(x => {
        return x % 2 != 0;
    })
    return impar;
}

console.log(numerosImpares(arreglo1)); // [1, 3, 5] //
console.log(numerosImpares(arreglo2)); // [1] //


    /* Función dado un arreglo devolver el doble de los elementos, si es impar, devolver la mitad */

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

console.log(duplicarODividir(arreglo1));
console.log(duplicarODividir(arreglo2));
