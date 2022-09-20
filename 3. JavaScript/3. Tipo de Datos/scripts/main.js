// SECCION INT
let numero = 5;
document.getElementById('cont-int').innerHTML  = `${numero}`;
console.log(`VARIABLE TIPO INT: `)
console.log(`Variable de tipo de dato int: numero = ${numero}`);

console.log('');

// SECCION FLOAT
let numeroFloat = 0.5;
document.getElementById('cont-float').innerHTML = `${numeroFloat}`;
console.log(`VARIABLE TIPO FLOAT: `)
console.log(`Variable de tipo de dato float: numeroFloat = ${numeroFloat}`);

console.log('');

// SECCION STRING
let tipoString = 'Soy una cadena de caracteres de tipo string';
document.getElementById('cont-string').innerHTML = `${tipoString}`;
console.log(`VARIABLE TIPO STRING: `);
console.log(`La siguiente cadena de caracteres es un dato de tipo string: '${tipoString}'.`);

console.log('');

// SECCION LIST & ARRAY (Listas o arreglos)
let colores = ["Rojo", "Blanco", "Negro"];
let arreglo = document.getElementById('cont-array');

console.log(`VARIABLE TIPO LISTA: `);
for (let color in colores) {
    arreglo.innerHTML += `${colores[color]} `;
    console.log(`${colores[color]}`)
}

console.log('');

// SECCION OBJETO
let person = {Altura: "1.60", ColorDeOjos: "cafe"};
document.getElementById('cont-objeto').innerHTML += `La altura de la persona objeto es: '${person.Altura}'`;
console.log(`VARIABLE OBJETO: `);
console.log(person);

console.log('')

// SECCIÓN BOOLEAN
let estaActivo = true;
document.getElementById('cont-bool').innerHTML += `El estado del usuario es: '${estaActivo}'.`;
console.log(`VARIABLE DE TIPO BOOLEAN: `);
console.log(estaActivo);

console.log('');

// DATOS COMPUESTOS
let persona;

persona = {
    nombre: "Luis",
    apellido: "Torres",
    telefono: ["12345"],
    direccion: {
        estado: "Principal",
        ciudad: "Dorado",
        calle: 7,
        casa: 5,
    }
}

document.getElementById('nombre').innerHTML += `${persona.nombre}`;
document.getElementById('apellido').innerHTML += `${persona.apellido}`;
document.getElementById('telefono').innerHTML += `${persona.telefono}`;
document.getElementById('estado').innerHTML += `${persona.direccion.estado}`;
document.getElementById('ciudad').innerHTML += `${persona.direccion.ciudad}`;
document.getElementById('calle').innerHTML += `${persona.direccion.calle}`;
document.getElementById('casa').innerHTML += `${persona.direccion.casa}`;

console.log(`VARIABLE CON DATOS COMPUESTOS: `);
console.log(persona);

console.log('');

// CAMBIAR TIPO DE DATO CON PARSEINT()

let numeroTipoLetra = '25';
let numeroLetra = '19';
document.getElementById('tipoLetra').innerHTML += `${numeroTipoLetra} es tipo ${typeof(numeroTipoLetra)} <br /> <br />`;

let numeroTipoNumero = parseInt(numeroTipoLetra);
const edad = Number(numeroLetra);
document.getElementById('tipoNumero').innerHTML += `${numeroTipoNumero} es tipo ${typeof(numeroTipoNumero)}`;

console.log(`CAMBIAR TIPOS DE DATOS: `);
console.log(`${numeroTipoLetra} es de tipo: '${typeof numeroTipoLetra}'.`);
console.log(`${numeroTipoNumero} es de tipo '${typeof numeroTipoNumero}'.`);
console.log(typeof edad);

console.log('');

// UNDEFINED & NULL
let variableVacia;
let variableNull = null;

document.getElementById('cont-undefined').innerHTML += `variableVacia es de tipo: <b>${variableVacia}</b>. <br><br>`;
document.getElementById('cont-null').innerHTML += `variableNull es de tipo <b>${variableNull}</b>.`

console.log(`VARIABLES TIPO UNDEFINED Y NULL: `);
console.log(variableVacia);
console.log(variableNull);

console.log('');

// TYPEOF
let verTipoDato = 'Juan';
document.getElementById('cont-typeof').innerHTML += `El tipo de dato de esta variable es: ${typeof verTipoDato}`

console.log('METHOD TYPEOF: ');
console.log(typeof verTipoDato);

console.log('');

// COPIAR VALORES 
let nombreAlumno = 'Juan';
let alumnoRepetido = nombreAlumno;

document.getElementById('cont-VariableNueva').innerHTML += `El valor de nombreAlumno es ${nombreAlumno}.`
document.getElementById('cont-variableRepetida').innerHTML += `El valor de alumnoRepetido es ${alumnoRepetido}.`

console.log('COPIAR DATOS DE VARIABLES A OTRA VARIABLE: ');
console.log(`El valor de nombreAlumno es '${nombreAlumno}'.`);
console.log(`El valor de alumnoRepetido es '${alumnoRepetido}'.`);

console.log('');

// ESTRUCTURA: VARIABLES COMPLEJAS
let personas;
personas = [
    {
        nombre: "Luis",
    }
]

let personaUno = document.getElementsByClassName('datoCompuesto');
personaUno[0].innerHTML += `${personas[0].nombre}`;
console.log(personas[0].nombre);

personas.push( // Agregamos al arrego con el metodo push: {nombre: "Marcos", edad: "10"} //
    {
        nombre: "Marcos",
        edad: 10,
    }
)

let personaDos = document.getElementsByClassName('datoCompuesto');
personaDos[1].innerHTML += `${personas[0].nombre}, ${personas[1].nombre} ${personas[1].edad},`;
console.log(personas); // Tenemos una lista con 2 objetos

personas[1].amigos = ['Roberto', 'Ana']; // Agregamos al objeto donde se encuentra 'Marcos' otro dato llamado amigos con los valores de roberto y ana //
console.log(personas); // {nombre: Luis}, {nombre: Marcos, edad: 10, amigos: Roberto, Ana} //

let usuarios = personas; // Asignamos a otra variable el contenido de "personas".
console.log(usuarios); // Imprime lo mismo que "personas".

usuarios[1].amigos[0] = 'Pedro'; // Cambiamos 'Pedro' por 'Marcos' solo en la variable usuarios.
console.log(usuarios[1].amigos);
