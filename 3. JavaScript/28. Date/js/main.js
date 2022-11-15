// Cuando usemos los method de Date, debemos colocar el parámetro para llamar a la función del objeto, como vemos al objeto en la linea 13.

document.body.style.fontFamily = 'verdana';

    // Instancia objeto Date

let time = new Date();

//========================================================================================================//

    // .getDate (Día número)

document.getElementById('getDate').innerHTML = `El día de hoy es: <b>${time.getDate()}</b>`;
console.log(`El día de hoy es: ${time.getDate()}`)

//========================================================================================================//

    // .getDay (Día de la semana en número)

document.getElementById('getDay').innerHTML = `El día de la semana en número es: <b>${time.getDay()}</b>`;
console.log(`El día de la semana en número es: ${time.getDay()}`)

//========================================================================================================//

    // .getMonth (Número del mes). Recordar sumarle +1 al mes.

document.getElementById('Month').innerHTML = `Estamos en el mes número: <b>${(time.getMonth()+1)}</b>`;
console.log(`El número del mes es: ${(time.getMonth()+1)}`)

//========================================================================================================//

    // .getFullYear (Año en número)

    document.getElementById('year').innerHTML = `Estamos en el año: <b>${time.getFullYear()}</b>`;
    console.log(`El año es: ${time.getFullYear()}`)

//========================================================================================================//

    // Construccion de fecha en tiempo real.

    document.getElementById('real_time').innerHTML = `Hoy es: <b>${time.getDay()}/ ${(time.getMonth()+1)}/ ${time.getFullYear()}</b> y mañana será: <b>${(time.getDay())+1}/ ${(time.getMonth()+1)}/ ${time.getFullYear()}</b> `;
    console.log(`La fecha de hoy es: ${time.getDay()}/ ${(time.getMonth()+1)}/ ${time.getFullYear()}. Mañana será: ${(time.getDay())+1}/ ${(time.getMonth()+1)}/ ${time.getFullYear()}.`)

//========================================================================================================//

    // .toString() (dia - mes - numerodia - año - hora)

    document.getElementById('string').innerHTML = `Hoy es: <b>${time.toString()}</b>`;
    console.log(`El año es: ${time.toString()}`)

//========================================================================================================//

    // .toDateString() (fecha local en string no hora)

    document.getElementById('date_string').innerHTML = `Hoy es: <b>${time.toDateString()}</b>`;
    console.log(`El año es: ${time.toDateString()}`)

//========================================================================================================//

    // .toLocaleString() (fecha y hora local)

    document.getElementById('locale_string').innerHTML = `Hoy es: <b>${time.toLocaleString()}</b>`;
    console.log(`El año es: ${time.toLocaleString()}`)