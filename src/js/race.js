import '../css/common.css';

const horses = ['Secretariat', 'Eclipse', 'West Australian', 'Flying Fox', 'Seabiscuit'];


// `Заїзд розпочався, ставки не приймаються`
// `Заїзд завершино, ставки приймаються`
// `Пернеможець заїзду ..., час забігу 00:0`


const refs = {
    startBtn: document.querySelector('.js-start-btn'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
}

refs.startBtn.addEventListener('click', ()=>{
    udateWinnerField('')
    const promises = horses.map((horse)=>{return run(horse)})
    console.log('promise', promises);
// refs.progressField.textContent = `🤖 Заїзд розпочався, ставки не приймаються`
udateWinnerField(`🤖 Заїзд розпочався, ставки не приймаються`)

Promise.race(promises).then(({ horse, time })=>{udateProgressField(`🎉 Пернеможець заїзду ${horse}, час забігу ${time}`)});

Promise.all(promises).then(({ horse, time })=>
udateProgressField(`📝 Заїзд завершино, ставки приймаються`))

})

function udateWinnerField(message) {
    refs.winnerField.textContent = message;
}
function udateProgressField(message) {
    refs.winnerField.textContent = message;
}



function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 4000);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
