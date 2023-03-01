const getUsers = async () => {

    try {
        const peticion = await axios('https://jsonplaceholder.typicode.com/users');
        const users = await peticion.data;
        console.log(users);

        const resultado = document.getElementById('resultado');

        for (user of users) {
            resultado.innerHTML += `
            
            <ul>
                <li>
                ${user.id} <br />
                ${user.name} <br />
                ${user.website} <br />
                ${user.username} <br />
                </li>
            </ul>
            
            `
        }
    } catch (error) {
        console.log(error);
    }
}

getUsers();