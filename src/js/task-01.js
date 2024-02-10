const categories = document.querySelector('#categories');

const numberOfCategories = categories.querySelectorAll('.item').length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.querySelectorAll('.item').forEach((category) => {

  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryTitle}`);

  const numberOfElements = category.querySelectorAll('li').length;
  console.log(`Elements: ${numberOfElements}`);
});
