// ######### FUNCIÓN COLOR FORMULARIO
let colorPredeterminado = '#000000';

const cambiarColor = () => {
    color = document.querySelector('#color');
    color.value = colorPredeterminado;
    color.addEventListener('input', actualizarPrimero, false);
    color.addEventListener('change', actualizarTodo, false);
    color.select();
}

function actualizarPrimero (event) {
    let p = document.querySelector('#parrafo-color');

    if (p) {
        p.style.color = event.target.value;
    }
}

function actualizarTodo(event) {
    document.querySelectorAll('p').forEach(function (p) {
        p.style.color = event.target.value;
    });
}

cambiarColor();