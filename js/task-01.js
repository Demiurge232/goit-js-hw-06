const listItemEl = document.querySelectorAll('.item');

const category = numberEl => {
  const h2El = listItemEl[numberEl].firstElementChild.textContent;

  const quantityEl = listItemEl[numberEl].lastElementChild.childElementCount;

  const answer = `Category: ${h2El} 
Element: ${quantityEl}`;

  return answer;
};

console.log(`Number of categories: ${listItemEl.length}`);
console.log(category(0));
console.log(category(1));
console.log(category(2));
