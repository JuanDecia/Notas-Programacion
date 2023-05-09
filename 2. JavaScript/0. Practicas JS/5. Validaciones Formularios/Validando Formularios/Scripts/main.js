/* Construímos una función para validar los campos */

const validarFormulario = (formulario) => {

    // Validamos que el nombre sea obligatorio. La función trim() quita los espacios agregados.
    if (formulario.nombre.value.trim().length == 0) {
        alert("Nombre obligatorio");
        return false;
    }

    // Validamos el email a traves de una expresión regular.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        alert("Email inválido");
        return false;
    }

    // Validamos que la contraseña sea obligatoria.
    if (formulario.contraseña.value.trim().length == 0) {
        alert("Contraseña Obligatoria");
        return false;
    }

    // Validamos que las contraseñas coincidan los valores ingresados.
    if (formulario.contraseña.value != formulario.confirmacion.value) {
        alert("Confirmación no coincide");
        return false;
    }

    // Validamos el género.
    if (formulario.genero.value == "") {
        alert("Género es obligatorio");
        return false;
    }

    // Validamos el país.
    if (formulario.pais.value == "") {
        alert("País es obligatorio");
        return false;
    }

    // Validamos check.
    if (formulario.terminos.checked) {
        alert("Debe aceptar los términos y condiciones");
        return false;
    }
    return true;

}