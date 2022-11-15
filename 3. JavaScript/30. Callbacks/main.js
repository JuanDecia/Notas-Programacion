let contResultado = document.getElementsByClassName("cont-resultado");

function imprimirMensaje (mensaje) {
    console.log(mensaje);
    
    for (let i = 0; i < contResultado.length; i++) {
        contResultado[i].innerHTML += mensaje;
    }
}

function operacionSuma (op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}.`);
}

operacionSuma(20, 20, imprimirMensaje);
