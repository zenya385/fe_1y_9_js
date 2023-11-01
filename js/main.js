// ========================== створеня елементу ===========================

const heading = document.createElement('h1');
console.log(heading); // <h1></h1>

heading.textContent = 'This is a heading';
console.dir(heading); // <h1>This is a heading</h1>

const image = document.createElement('img');
image.src =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2F&psig=AOvVaw22OCJ2YPXRUg2FzSk8ybYE&ust=1698945931966000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLizkvioo4IDFQAAAAAdAAAAABAE';
image.alt = 'Nature';
console.dir(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />
