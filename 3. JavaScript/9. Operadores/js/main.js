let contResultado = document.getElementsByClassName("cont-resultado");

let lucas = 15;
let abril = 11;

if (lucas && abril < 18) {
    console.log(`Los chicos son menores de edad.`);
    contResultado[0].innerHTML += "Los chicos son menores de edad.";
} else {
    console.log(`Uno o ambos de los chicos no es menor de edad.`);
    contResultado[0].innerHTML += "Uno o ambos de los chicos no es menor de edad.";
};