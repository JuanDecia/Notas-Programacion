    // Primero tomamos el objeto "body"

const cuerpo = document.querySelector('body');

    // Creamos la funcion setTimeout() con un retardo de 10 seg y aplicando cambios en el background.

let retardo = setTimeout ( () => {

    cuerpo.style.backgroundColor = 'grey'
    cuerpo.style.color = 'white'

    clearTimeout(retardo)
    console.log(`Se ha limpiado el retardo.`)
},10000);