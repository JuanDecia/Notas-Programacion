let eventos = [];

const iniciarEventos = () => {
    for (let i = 1; i < 200; i++) {
      eventos.push({
        nombre: "Evento " + i,
        descripcion: "Esta es la descripción del evento " + i,
      })
    }
}

    // Get button "cargar-eventos" //
const cargarEventos = document.querySelector("#cargar-eventos");

    // Aplicar función al button "cargar-eventos" //
cargarEventos.addEventListener('click', function(){

    for(let i = 0; i < 5; i++) {

        const nombre = document.createElement("h3");

        let contenidoNombre = document.createTextNode(eventos[i].nombre);
            nombre.appendChild(contenidoNombre);

        const descripcion = document.createElement("p");

        let contenidoDescripcion = document.createTextNode(eventos[i].descripcion);
            descripcion.appendChild(contenidoDescripcion);

        const separador = document.createElement("hr");

        document.getElementById("eventos").appendChild(nombre);
        document.getElementById("eventos").appendChild(descripcion);
        document.getElementById("eventos").appendChild(separador);
    }
})

const cargarMas = document.querySelector('#cargar-mas');

    // Aplicar función al button "cargar-mas" //
cargarMas.addEventListener('click', function(){

    for (let i = 5; i < eventos.length; i++) {

        let nombre = document.createElement("h2");
        let contenidoNombre = document.createTextNode(eventos[i].nombre + " (LUEGO DEL SCROLL)");
            nombre.appendChild(contenidoNombre);
    
        let descripcion = document.createElement("p");
        let contenidoDescripcion = document.createTextNode(eventos[i].descripcion);
            descripcion.appendChild(contenidoDescripcion);
    
        let separador = document.createElement("hr");
    
        document.getElementById("eventos").appendChild(nombre);
        document.getElementById("eventos").appendChild(descripcion);
        document.getElementById("eventos").appendChild(separador);
      }
})

iniciarEventos();

/* const stringEvento = 'Evento';
    let numEvento = 1;

    while (numEvento < 6) {
        document.querySelector('.contenedor-eventos').innerHTML += 
            `
                <h3>${stringEvento} ${numEvento}</h3>
                    <p>Esta es la descripcion del ${stringEvento} ${numEvento} </p>
                        <hr />
            `
        numEvento++;
*/