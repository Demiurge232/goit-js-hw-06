const divEl = document.querySelector('#counter');
const decrementBtn = divEl.firstElementChild;
const incrementBtn = divEl.lastElementChild;
const valueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', onClickPlus);
function onClickPlus() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', onClickMinus);
function onClickMinus() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
