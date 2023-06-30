// const myBtn = document.querySelector('.btn');

// console.log('myBtn:>>', myBtn);

// myBtn.addEventListener('mousedown', e => {
//   console.log('e:>>', e);
//   console.log('Button was douwn');
// });
// myBtn.addEventListener('mouseup', () => {
//   console.log('Button was up');
// });

// =================mouse move  and mouse out==============================

// const screan = document.querySelector('[class="scre"]');
// // console.log('screan:>>', screan);
// const viewCordinat = document.querySelector('.view');

// screan.addEventListener('mousemove', e => {
//   console.log('e.clienty:>>', e);
//   let clientx = e.clientX;
//   let clienty = e.clientY;
//   let view = `координати: X:${clientx} Y:${clienty}`;
//   viewCordinat.innerHTML = view;
// });

// ============= mouseover dblclick mouseout scroll click==========================

// const click = document.querySelector('.click');
document.querySelector('.dblclick').addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'yellow';
});
const mouseover = document.querySelector('.mouseover');
const mouseout = document.querySelector('.mouseout');

function func() {
  document.body.style.backgroundColor = 'red';
}
// click.addEventListener('click', () => {
//   document.body.style.backgroundColor = 'red';
// });
addEventListener('dblclick', () => {
  document.body.style.backgroundColor = 'yellow';
});
mouseover.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'grey';
});
mouseout.addEventListener('mouseout', () => {
  document.body.style.backgroundColor = 'blue';
});
window.addEventListener('scroll', () => {
  document.body.style.lineHeight = 2;
  document.body.style.backgroundColor = 'yellowgreen';
  document.body.style.color = 'green';
});

// ===========================================================
// ===========================================================
