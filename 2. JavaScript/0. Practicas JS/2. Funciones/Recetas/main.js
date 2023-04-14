// DOM
const contResultado = document.getElementsByClassName("cont-resultado");

// Recetas
let recetaVegetariana = ["Milanesa de soja con ensalada"," Berenjenas rellenas de queso"," Verduras Asadas"];
let recetaNormal = ["Asado con fritas"," Milanesa napolitana"," Carne al horno con puré"];

// Mostramos los menúes en el DOM.
for (let i = 0; i < recetaNormal.length; i++) {
    contResultado[0].innerHTML += `${i + 1}. ${recetaNormal[i]} <br />`;
}

for (let i = 0; i < recetaVegetariana.length; i++) {
    contResultado[1].innerHTML += `${i + 1}. ${recetaVegetariana[i]} <br />`;
}

const menuVegetariano = true;
const menuNoVegetariano = false;

// Es o no vegetariano
const menu = (receta, esVegetariano) => {
    if (esVegetariano == true) {
        return(`Menus Vegetarianos: ${recetaVegetariana}`);
    }
    else {
        return(`Menus no Vegetarianos: ${recetaNormal}`)
    }
}

console.log(menu(recetaNormal, menuNoVegetariano));
contResultado[2].innerHTML += `${menu(recetaNormal, menuNoVegetariano)}.`;

console.log("");

console.log(menu(recetaVegetariana, menuVegetariano));
contResultado[3].innerHTML += `${menu(recetaVegetariana, menuVegetariano)}.`;