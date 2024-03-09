// console.log(localStorage);


//* localStorage.setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.

localStorage.setItem("sidebar", "expanded");
localStorage.setItem("notification-level", "mute");
localStorage.setItem("ui-theme", JSON.stringify({name:'Jon', age: 20}));   //"{name:'Jon', age: 20}"


const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
  };
  
  localStorage.setItem("settings", JSON.stringify(settings));



 //*   localStorage.getItem(key) - дозволяє прочитати зі сховища запис з ключем key. Якщо у сховищі відсутній запис з таким ключем, метод повертає null. Якщо значення - це звичайний рядок, немає потреби його парсити.

//  console.log(localStorage.getItem('sidebar'));

  const savedSettings = localStorage.getItem("settings");
  // const parsedSettings = JSON.parse(savedSettings);
  const parsedSettings = JSON.parse(localStorage.getItem("settings"));
  
  // console.log(parsedSettings); // settings object



  //* Метод localStorage.removeItem(key) видаляє зі сховища вже існуючий запис з ключем key.

//  localStorage.removeItem('sidebar') 


 //* Операція повного очищення сховища - небезпечна, оскільки може порушити записи, зроблені іншими розробниками проекту. Проте, якщо ви хочете повністю очистити сховище, потрібно викликати метод localStorage.clear().



//  localStorage.clear()