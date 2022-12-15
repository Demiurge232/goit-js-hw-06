const formEl = document.querySelector('.login-form');
const onFormSubmit = evt => {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (!email.value || !password.value) {
    return alert('Всі поля повинні бути заповнені!!!');
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  evt.currentTarget.reset();
};

formEl.addEventListener('submit', onFormSubmit);
