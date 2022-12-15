const bodyEl = document.querySelector('body');

const spanEl = document.querySelector('.color');

const buttonEl = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClick = () => {
  spanEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
};

buttonEl.addEventListener('click', onClick);
