// const counterValue = {
//     value: 0,
//     decrement() {
//         this.value -= 1;
//     },
//     increment() {
//         this.value +=1;
//     }
// }
const buttonDecrement = document.querySelector('button [data-action ="decrement"]');
const buttonIncrement = document.querySelector('button [data-action ="increment"]');
const valueEl =  document.querySelector("#value");
// buttonDecrement.addEventListener("click", function () {
//     counterValue.decrement();
//     valueEl.textContent = counterValue.value
// });
// buttonIncrement.addEventListener("click", function () {
//     counterValue.increment();
//     valueEl.textContent = counterValue.value
// });

counterValue = 0;
valueEl = counterValue;
function onClick() {
    counterValue += 1;
    document.querySelector("#value").innerHTML = counterValue;
  };



























