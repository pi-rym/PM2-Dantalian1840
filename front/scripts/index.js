$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
    renderCards(data);
});


const renderCards = (data) => {
    data.map((item) =>{    
        const movieCard = document.createElement('div');
        const newTitle = document.createElement('h3');
        const newPoster = document.createElement('img');
        const navegator = document.createElement('a');
    
        movieCard.classList.add('elementos');
        movieCard.classList.add('card')
        movieCard.classList.add('col')
        movieCard.classList.add('card-size')
        newTitle.classList.add('tarjeta');
    
        newTitle.innerHTML = item.title;
        newPoster.src = item.poster;
        navegator.href = '/front/index.html';
    
        newTitle.appendChild(navegator);
        movieCard.appendChild(newTitle);
        movieCard.appendChild(newPoster);
    
        const tarjetas = document.getElementById('cards');
        tarjetas.appendChild(movieCard);
    });
}




// // ? Interacción de la API por medio de un botón
// // Estructura de Datos

// let id = 1
// class user {
//     constructor (id, name, email, website){
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.website = website;
//     }
// }

// class Repository {
//     constructor(){
//         this.users = [];
//     }
    
//     createUser({id, name, email, website}){
//         const newUser = newUser(id, name, email, website);
//         this.users.push(newUser);
//     }
//     getAllUsers(){
//         return this.users;
//     }
// }

// // Interacción con el DOM y la estructura de datos creada

// const repository = new Repository();
// const buttonAddUser = document.getElementById('buttonAddUser'); //? ESTILO 

// //* Mapeo de usuarios

// const mapUsers = (user) => {
//     const cardUser = document.createElement('div');
//     cardUser.innerHTML = `
//     <p>${user.id}</p>
//     <p>${user.name}</p>
//     <p>${user.email}</p>
//     <p>${user.website}</p>
//     `;

//     cardUser.style.border = 'solid 1px #3A3335';
//     cardUser.style.width = '200px';
//     cardUser.style.margin = '1em';
//     cardUser.style.paddingLeft = '1em';

//     return cardUser;
// };

// //* Renderización de usuarios

// const renderUsers = () => {
//     const containersUsers = document.getElementById('containerUsers') //? ESTILO
//     containersUsers.innerHTML = '';
//     const users = repository.getAllUsers();

//     const allUsers = users.map(mapUsers);

//     allUsers.forEach((card) => containersUsers.appendChild(card));
// };

// //* Creación del usuario en la estructura de datos

// const getUsers = (data) => {
//     id++;
//     repository.createUser(data);
//     renderUsers();
// };

// //* Solicitud HTTP de tipo GET para obtener la información.
// //* Tener en cuenta que esta base de datos solo tiene 10 objetos, por eso el if.

// const addUser = () => {
//     if (id > 10) return alert('Máximo de usuarios alcanzado');
//     $.get(`https://jsonplaceholder.typicode.com/users/${id}`, getUsers);
// };

// buttonAddUser.addEventListener('click', addUser);