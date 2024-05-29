const BASE_URL = 'http://localhost:3000';

// GET

// function fetchUsers() {
//   return fetch(`${BASE_URL}/users`)
//   .then(res =>res.json()
//       .then(user => console.log('user :>> ', user))
//       .catch(error => console.error('помилка :>> ', error))
//   );
// }

async function fetchUsers() {
   const respons = await fetch(`${BASE_URL}/users`);
   const users = await respons.json()
   return users
}

// fetchUsers()


// function fetchUserById(userId) {
//   return fetch(`${BASE_URL}/users/${userId}`).then(res => res.json());
//   // .then(users=>console.log(users))
// }

async function fetchUserById(userId) {
    try {
        const respons = await fetch(`${BASE_URL}/users/${userId}`);
return await respons.json();
    } catch (error) {
       console.error('помилка :>> ', error) 
    }
}


fetchUsers();
fetchUserById(2);
fetchUserById(5);

// POST

// PATCH
// PUT
// DELETE
