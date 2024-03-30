const date = new Date();
console.dir(+date);
console.log(+date);

const option = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};

console.log(date.toLocaleString('ua-UA', option));

// console.log('Минуле', new Date(1711557118776))
// console.log('терішнє', new Date())

// const currentTime = new Date();
const currentTime = date.getTime();
const pastTime = Date.parse(2000, 5, 8, 12, 0, 0, 0);
// const pastTime = date.getTime(1711557118776);
console.log(currentTime);
console.log(pastTime);
console.log('різниця у часі', currentTime - pastTime);
// console.log('currentTime', date.getTime())

// const teamMeetingDate = new Date("March 16, 2030");
// console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
// console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
// console.log(new Date("2030-03-16"));

// console.log(new Date("2030-03"));
// console.log(new Date("2030-03-16T14:25:00"))

// const date = new Date();
// console.log("Date: ", date);

// Повертає день місяця від 1 до 31
// console.log("getDate(): ", date.getDate());

// Повертає день тижня від 0 до 6
// console.log("getDay(): ", date.getDay());

// Повертає місяць від 0 до 11
// console.log("getMonth(): ", date.getMonth());

// Повертає рік з 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// Повертає години
// console.log("getHours(): ", date.getHours());

// Повертає хвилини
// console.log("getMinutes(): ", date.getMinutes());

// Повертає секунди
// console.log("getSeconds(): ", date.getSeconds());

// Повертає мілісекунди
// console.log("getMilliseconds(): ", date.getMilliseconds());

// const date = new Date();
// console.log("Date: ", date);

// Повертає день місяця від 1 до 31
// console.log("getUTCDate(): ", date.getUTCDate());

// Повертає день тижня від 0 до 6
// console.log("getUTCDay(): ", date.getUTCDay());

// Повертає місяць від 0 до 11
// console.log("getUTCMonth(): ", date.getUTCMonth());

// Повертає рік з 4 цифр
// console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Повертає години
// console.log("getUTCHours(): ", date.getUTCHours());

// Повертає хвилини
// console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Повертає секунди
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Повертає мілісекунди
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());

// Щоб встановити дату існує 2 способи. Встановимо 1500000000000мс

// з початку ери Unix за допомогою конструктора

const date1 = new Date(2024, 0, 31, 1, 10, 0, 0);

// Перевіримо

console.log(`2017, 6, 14, 5, 40 відповідає ${date1.getTime()}`);

// "2017, 6, 14, 5, 40 відповідає 1500000000000"

/* За допомогою методів set */

// Створимо новий об'єкт з поточною датою

const secondDate = new Date();

// Змінимо рік і в ньому ж місяць і день місяця

secondDate.setFullYear(2017, 6, 14);

// Змінимо годину і в ньому ж хвилини, секунди і мілісекунди

secondDate.setHours(5, 40, 0, 0);

// Перевіримо

console.log(`2017, 6, 14, 5, 40 відповідає ${secondDate.getTime()}`);

// "2017, 6, 14, 5, 40 відповідає 1500000000000"
