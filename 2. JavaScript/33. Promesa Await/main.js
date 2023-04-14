function arreglarCuarto() {
    let promesa = new Promise(function (resolve, reject) {
        resolve('Cuarto Arreglado');
    });
    return promesa;
};

async function procesar() {
    try {
        let resultado = await arreglarCuarto();
        console.log(`Resultado: ${resultado}.`);
    }

    catch(error) {
        console.log(`Resultado: ${error}`);
    };
};

procesar();