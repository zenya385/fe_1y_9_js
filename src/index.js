const BASE_URL = "http://localhost:5555";

//* ======================= Отримання списку постів

async function getPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error("Відповідь від бекенду була невдалою");
    }
    const data = await response.json();
    // console.log('data :>> ', data);
    return data;
  } catch (error) {
    console.error(error);
  }
}


//* ============================ Створення нового поста

async function createPost(title, content) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(`${BASE_URL}/posts`, options);

    if (!response.ok) {
      throw new Error("Відповідь від бекенду була невдалою");
    }
    const data = await response.json();
    console.log("data :>> ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// createPost("another title", 200)

//* ============================== Оновлення поста

async function updatePost(id, title, content) {
  try {
    const options = {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(`${BASE_URL}/posts/${id}`, options);

    if (!response.ok) {
      throw new Error("Відповідь від бекенду була невдалою");
    }
    const data = await response.json();
    console.log("data :>> ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// updatePost(7111, "another title qwerty", 300)

//*==================================== Видалення поста

async function deletePost(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Відповідь від бекенду була невдалою");
    }
    const data = await response.json();
    console.log("data :>> ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
// deletePost(5666)

// Додавання коментаря до поста

async function createComment(postId, comment) {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify({ postId, comment }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    const response = await fetch(`${BASE_URL}/comments`, options);
    if (!response.ok) {
      throw new Error("Відповідь від бекенду була невдалою");
    }
    const data = await response.json();
    console.log("data :>> ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// createComment( 7111 ,'llorem_10 lorem_10 lorem_10 lorem_10 ')

//*================== Оновлення відображення постів на сторінці

function renderPosts(posts) {
  const postContanier = document.querySelector('#postsContainer');
  postContanier.innerHTML = '';

  posts.forEach(post => {
const postElement = document.createElement('div')
postElement.classList.add('post');
postElement.innerHTML=`
<h2>${post.title}</h2>
  <p>${post.content}</p>
  <button class="editPostButton" data-id="${post.id}">Редагувати</button>
  <button class="deletePostButton" data-id="${post.id}">Видалити</button>
  <div class="commentsContainer" data-id="${post.id}">
  <h3>Коментарі:</h3>
  <ul>
  <li></li>
  </ul>
  <form class="createCommentForm">
  <input type="text" class="commentInput" placeholder="Новий коментар" required>
  <button type="submit">Додати коментар</button>
  </form>
  </div>
` 
postContanier.appendChild(postElement)
  });
}

// getPosts().then(res=>res.json()).then(posts=>console.log('posts :>> ', posts));

// ============== Рендер постів (відмальовування)   ==============
// renderPosts([
//   {
//     "id": "1",
//     "title": "Це заголовок",
//     "vcontentiews": 100
//   },
//   {
//         "id": "2",
//     "title": "Інший заголовок",
//     "content": 200
//   },
//   {
//     "id": "d887",
// "title": "another title",
//     "content": 200
//   }])

//*======================= Обробник події для створення поста

document.getElementById('createPostForm').addEventListener('submit', createPostFromForm);

async function createPostFromForm(event) {
  event.preventDefault()
  const title = document.querySelector("#titleInput").value;
  // console.log('title :>> ', title);
  const content = document.querySelector("#contentInput").value;
  // console.log('content :>> ', content);
  await createPost(title, content);
  const posts = await getPosts()
  renderPosts(posts)
}

//* ============== Обробник події для редагування поста

document.addEventListener('click', editPost);

async function editPost(event) {
  // event.preventDefault();
  if(event.target.classList.contains('editPostButton')){
const id = event.target.dataset.id;
const title = prompt('Новий заголовок')
const content = prompt('Новий зміст')
await updatePost(id, title, content)
const posts = await getPosts()
  renderPosts(posts)
  }
}

// Обробник події для видалення поста

// document.addEventListener('click', cb);

// Обробник події для додавання коментаря

// document.addEventListener('submit', cb);

// Запуск додатку

async function startApp() {
  // const posts = await getPosts();
  // renderPosts(posts);
}

// startApp();
