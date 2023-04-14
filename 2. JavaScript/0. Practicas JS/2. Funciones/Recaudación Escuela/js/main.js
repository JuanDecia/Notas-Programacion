// DOM
let contResultado = document.getElementsByClassName("cont-resultado");

// Horas y minutos a minutos
const totalMinutos = (hora, min) => {
    const  minutos = hora * 60 + min;
    return minutos;
}

// Turnos
console.log(`Turno mañana: ${totalMinutos(5,25)} minutos.`);
contResultado[0].innerHTML += `${totalMinutos(5,25)}`;

console.log(`Turno tarde: ${totalMinutos(4,30)} minutos.`);
contResultado[1].innerHTML += `${totalMinutos(4,30)}`;

console.log(`Turno Vespertino ${totalMinutos(0,15)} minutos.`);
contResultado[2].innerHTML += `${totalMinutos(0,15)}`;

console.log("");
//###########

// Recolección Dinero
const cantidadRecolectadaSimple = (costo, participantes) => {
    const total = costo * participantes;
    return total;
}

let recolectaGrupoUno = cantidadRecolectadaSimple(10, 5);
let recolectaGrupoDos = cantidadRecolectadaSimple(1, 5);

console.log("Recaudación de dinero");

console.log(`Grupo 1: $${recolectaGrupoUno}`);
contResultado[3].innerHTML += `${recolectaGrupoUno}`;

console.log(`Grupo 2: $${recolectaGrupoDos}`);
contResultado[4].innerHTML += `${recolectaGrupoDos}`;

contResultado[5].innerHTML += recolectaGrupoUno + recolectaGrupoDos;

console.log("");
//###########

// Dinero Recaudado
const cantidadRecolectada = (cantidadEstudiantes, costoEstudiante, costoAdulto, cantidadAdultos) => {
    let totalRecaudado = cantidadRecolectadaSimple(costoEstudiante, cantidadEstudiantes) + cantidadRecolectadaSimple(costoAdulto, cantidadAdultos);
    return totalRecaudado;
}

// CUENTA ESTUDIANTES
contResultado[6].innerHTML += `${1 * 5}`;
contResultado[7].innerHTML += `${0 * 5}`;

// CUENTA ADULTOS
contResultado[8].innerHTML+= `${20 * 4}`;
contResultado[9].innerHTML+= `${20 * 3}`;

// TOTALES

console.log("Totales recudados por la escuela");

console.log(`Recaudación grupo #1: $${cantidadRecolectada(1,5,20,4)}`);
contResultado[10].innerHTML += `${cantidadRecolectada(1,5,20,4)}`;

console.log(`Recaudación grupo #2: $${cantidadRecolectada(0,5,20,3)}`);
contResultado[11].innerHTML += `${cantidadRecolectada(0,5,20,3)}`;