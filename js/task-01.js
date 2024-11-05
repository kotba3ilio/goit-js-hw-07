let categoryiesList = document.querySelector('#categories');
let categories = categoryiesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const title = category.querySelector('h2');
  const categoryItems = category.querySelector('ul').querySelectorAll('li');
  console.log(`Category: ${title.innerText}`);
  console.log(`Elements: ${categoryItems.length}`);
});