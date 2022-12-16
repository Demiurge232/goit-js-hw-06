const inputEl = document.querySelector('#validation-input');

function onBlur(evt) {
  let inputLenght = evt.currentTarget.value.length;

  if (inputLenght === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}

inputEl.addEventListener('blur', onBlur);
