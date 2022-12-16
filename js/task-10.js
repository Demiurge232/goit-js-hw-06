const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');

const divBoxes = [];
let width = 20;
let height = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes() {
  if (Number(inputEl.value) > 100 || Number(inputEl.value) <= 0) {
    alert('Ведіть число в межах від 1–100!!!');
    return;
  }

  for (let i = 1; i <= Number(inputEl.value); i += 1) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    divBoxes.push(div);
  }

  boxesEl.append(...divBoxes);
}

function onclickdestroy() {
  boxesEl.innerHTML = '';
  divBoxes.length = 0;
  width = 20;
  height = 20;
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', onclickdestroy);
