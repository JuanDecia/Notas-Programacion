const limpiarErrores = () => {
    let errores = document.getElementsByClassName("error");
    for (let i = 0; i < errores.length; i++) {
        errores[i].innerHTML = ""; 
    }
}

const validarFormulario = (formulario) => {

    limpiarErrores();

    if (formulario.nombre.value.trim().length == 0) {
        document.getElementById("errorNombre").innerText = "Campo Obligatorio";
        formulario.nombre.focus();
        return false;
    }

    if (formulario.nombre.value.trim().length < 3) {
        document.getElementById("errorNombre").innerText = "Minimo 3 caracteres";
        formulario.nombre.focus();
        return false;
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
        document.getElementById("errorEmail").innerText = "No cumple con los caracteres válidos";
        formulario.email.focus();
        return false;
    }

    if (formulario.contraseña.value.trim().length == 0) {
        document.getElementById("errorContraseña").innerText = "Campo Obligatorio";
        formulario.contraseña.focus();
        return false;
    }
    
    if (formulario.contraseña.value.trim().length < 5) {
        document.getElementById("errorContraseña").innerText = "Debe tener mínimo 5 caracteres";
        formulario.contraseña.focus();
        return false;
    }

    if (formulario.contraseña.value != formulario.confirmar.value) {
        document.getElementById("errorConfirmar").innerText = "Las contraseñas no coinciden";
        formulario.confirmar.focus();
        return false;
    }

    if (formulario.genero.value == "") {
        document.getElementById("errorGenero").innerText = "Campo obligatorio";
        return false;
    }

    if (formulario.pais.value == "") {
        document.getElementById("errorPais").innerText = "Campo obligatorio";
        document.pais.focus();
        return false;
    }

    if (formulario.terminos.checked) {
        document.getElementById("errorTerminos").innerText = "Campo obligatorio";
        document.terminos.focus();
        return false;
    }

    alert("Datos Enviados");

    return true;
}