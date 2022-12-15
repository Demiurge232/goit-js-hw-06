const inputEl = document.querySelector('#validation-input');

function onBlur(evt) {
  let inputLenght = evt.currentTarget.value.length;

  if (inputLenght == inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
  }
}

inputEl.addEventListener('blur', onBlur);
