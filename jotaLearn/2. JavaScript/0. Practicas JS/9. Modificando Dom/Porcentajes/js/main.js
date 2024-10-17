window.addEventListener('load', () => {
    
    const alumnosHTML = document.getElementById('total-alumnos');
    const niñosHTML = document.getElementById('niñosHTML');
    const niñasHTML = document.getElementById('niñasHTML');
    const niñosField = document.getElementById('niñosCantidad');
    const niñasField = document.getElementById('niñasCantidad');

    const calcularPorcentaje = () => {

        // Cantidad niños
        const niñosCantidad = parseInt(niñosField.value);
        console.log(niñosCantidad);

        // Cantidad niñas
        const niñasCantidad = parseInt(niñasField.value);
        console.log(niñasCantidad);

        const totalAlumnos = niñosCantidad + niñasCantidad;
        console.log(totalAlumnos)

        const porcentajeNiños = niñosCantidad * 100 / totalAlumnos;
        const porcentajeNiñas = niñasCantidad * 100 / totalAlumnos;

        niñosHTML.innerHTML = porcentajeNiños;
        niñasHTML.innerHTML = porcentajeNiñas;
        alumnosHTML.innerHTML = totalAlumnos;
    }


    const button = document.getElementById('button');
        button.addEventListener('click', calcularPorcentaje);

})