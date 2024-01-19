const vanilaOutput = document.querySelector('.output');
const throttledOutput = document.querySelector('.output.throttled');
const debauncedOutput = document.querySelector('.output.debaunced');
const trailingOutput = document.querySelector('.output.trailing');
const leadingOutput = document.querySelector('.output.leading');

// let vanilaEventCounter = 0;
// let throttledEventCounter = 0;
// let debauncedEventCounter = 0;

const eventCounter = {
  vanila: 0,
  throttled: 0,
  debounced: 0,
  trailing: 0,
  leading: 0,
};

document.addEventListener('scroll', () => {
  eventCounter.vanila += 1;
  vanilaOutput.textContent = eventCounter.vanila;
});

document.addEventListener('scroll', _.throttle(throttleScroll, 300));

function throttleScroll() {
  eventCounter.throttled += 1;
  throttledOutput.textContent = eventCounter.throttled;
}

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debauncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );
document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      eventCounter.trailing += 1;
      trailingOutput.textContent = eventCounter.trailing;
    },
    300,
    { trailing: true, leading: false }
  )
);
document.addEventListener(
  'scroll',
  _.debounce(
    () => {
      eventCounter.leading += 1;
      leadingOutput.textContent = eventCounter.leading;
    },
    300,
    { trailing: false, leading: true }
  )
);
