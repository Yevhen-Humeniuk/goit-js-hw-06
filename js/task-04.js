const counterValue = {
  value: 0,
  decrement() {
      this.value -= 1;
  },
  increment() {
      this.value += 1;
  },
};

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanEl = document.querySelector("#value");

btnDecrement.addEventListener("click", function () {
  counterValue.decrement();
  spanEl.textContent = counterValue.value;
});
btnIncrement.addEventListener("click", function () {
  counterValue.increment();
  spanEl.textContent = counterValue.value;
});



























