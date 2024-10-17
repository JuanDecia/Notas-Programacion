// ######### FUNCIÓN COLOR FORMULARIO
let colorPredeterminado = '#000000';

const cambiarColor = () => {
    color = document.querySelector('#color');
    color.value = colorPredeterminado;
    color.addEventListener('input', actualizarPrimero, false);
    color.addEventListener('change', actualizarTodo, false);
    color.select();
}

const actualizarPrimero = (e) => {
    let p = document.querySelector('#parrafo-color');

    if (p) {
        p.style.color = e.target.value;
    }
}

const actualizarTodo = (e) => {
    document.querySelectorAll('p').forEach( (p) => {
        p.style.color = e.target.value;
    });
}

cambiarColor();