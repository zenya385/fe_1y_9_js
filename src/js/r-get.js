const BASE_URL = 'http://localhost:3000';

function fetchUsers() {
return fetch(`${BASE_URL}/users`).then(res=>res.json())
}



function fetchUserById(userId) {  
return fetch(`${BASE_URL}/users/${userId}`).then(res=>res.json())
// .then(users=>console.log(users))
}

fetchUsers()
fetchUserById(2)
fetchUserById(5)