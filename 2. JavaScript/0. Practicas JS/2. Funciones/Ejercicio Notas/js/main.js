const contenedorResultados = document.getElementsByClassName('cont-resultado');

// Nota final
const gestionarEstudiante = (estudiante, nota1, nota2) => {

    // Llamamos funcion calcular promedio para sacar el resultado de las notas.
    let notaFinal = calcularPromedio(nota1, nota2);
    console.log(`Nombre completo del estudiante: ${estudiante}. Promedio: ${notaFinal}.`);

    // Mostramos en DOM
    for(let i = 0; i < contenedorResultados.length; i++) {
        contenedorResultados[i].innerHTML = `Nombre completo del estudiante: ${estudiante}. Promedio: ${notaFinal}.`;
    }
};

// Calcula promedio hipotetico
const calcularPromedio = (nota1, nota2) => {
    return (nota1 + nota2) / 2;
}

// Llamada funcion
gestionarEstudiante('Jose Carrillo', 18, 20);