const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listItemEl = document.querySelector('#ingredients');

const liEl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;

  liEl.push(li);
}

listItemEl.append(...liEl);
