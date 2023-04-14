let contResultado = document.querySelector(".cont-resultado");
let fruta = prompt("Que fruta desea comprar (plural)?");
fruta[0].toUpperCase();

switch (fruta) {

    case 'Naranjas':
        console.log("El Kg de naranja cuesta $0.59.");
        contResultado.innerHTML += "El Kg de naranja cuesta $0.59.";
        break;
    
    case 'Manzanas':
        console.log("El Kg de manzana cuesta $0.32.");
        contResultado.innerHTML += "El Kg de manzana cuesta $0.32.";
        break;

    case 'Bananas':
        console.log("El Kg de banana cuesta $0.48.");
        contResultado.innerHTML += "El Kg de banana cuesta $0.48.";
        break;

    default:
        contResultado.innerHTML += "No disponemos de " + fruta + ".";
        console.log("No disponemos de " + fruta + ".");        
};

