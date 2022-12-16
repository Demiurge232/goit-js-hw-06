const listEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listEl.length}`);
listEl.forEach(element => {
  const h2El = element.firstElementChild.textContent;

  const quantityEl = element.lastElementChild.childElementCount;

  const answer = `Category: ${h2El} 
Element: ${quantityEl}`;

  console.log(answer);
});
