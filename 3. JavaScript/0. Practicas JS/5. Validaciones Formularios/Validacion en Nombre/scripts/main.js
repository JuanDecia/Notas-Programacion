// Crear una función que valide el nombre, que tenga más de dos caracteres y no debe tener números.

const limpiarErrores = () => {
    let errores = document.querySelector('.error');
    for (let i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    };
};

const validarCampoNombre = (formulario) => {

    limpiarErrores();
    const caracteres = new RegExp('^[A-Z]+$', 'i');

    // El campo debe tener más de 2 caracteres
    if (formulario.nombre.value.trim().length < 3 ) {
        document.querySelector('.error').innerHTML = 'El nombre debe tener más de 2 caracteres';
        formulario.nombre.focus();
        return false;
    }

    else if (!caracteres.test(formulario.nombre.value)) {
        document.querySelector('.error').innerText = 'Solo estan permitidos caracteres.';
        formulario.nombre.focus();
        return false;
    };

    alert('Datos Enviados');

    return true;
};