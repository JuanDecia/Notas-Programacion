const getUsers = async () => {

    // Fragmento de código que se ejecuta si es exitoso
    try {

    // Pedimos api con fetch, esperamos con await
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

    // convertimos la api en un json, esperamos con await
    const users = await respuesta.json()

    console.log(users);

    for (user of users) {
        document.body.innerHTML += `
        
        <ul>
            <li>
            ${user.id} <br />
            ${user.name} <br />
            ${user.website} <br />
            ${user.username}
            </li>
        </ul>

        `
    }

    // Fragmento de código que se ejecuta si exite algún error y lo imprime por consola
    } catch (error) {
        console.log(error);
    }

    // Finally es opcional.
}

getUsers();