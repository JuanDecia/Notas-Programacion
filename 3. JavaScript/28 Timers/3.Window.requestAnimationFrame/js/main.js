function repetirSaludar() {

        // creamos variable, aplicamos w.rAF y dentro del parámetro el nombre de la funcion.
    let saludo = window.requestAnimationFrame(repetirSaludar)

        // la función repite hola mundo en consola hasta que se declare un break.
    console.log('hola mundo.')

        // declaramos la condición que termina la repeticion de la funcion.
    saludo > 10 ? window.cancelAnimationFrame(saludo) : null
}

    // debemos llamar a la funcion para que se aplique "window".
repetirSaludar()

document.body.style.fontFamily = 'verdana'