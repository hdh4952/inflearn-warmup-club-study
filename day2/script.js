const data = [
  // Breakfast
  {
    title: 'Pancakes',
    category: 'Breakfast',
    description: 'Delicious fluffy pancakes served with maple syrup and butter.',
    price: 7.99,
    imgSrc: './img/pancakes.jpg',
  },
  {
    title: 'Egg Benedict',
    category: 'Breakfast',
    description: 'Classic egg benedict with poached eggs, Canadian bacon, and hollandaise sauce on an English muffin.',
    price: 9.49,
    imgSrc: './img/eggbenedict.jpg',
  },
  {
    title: 'French Toast',
    category: 'Breakfast',
    description: 'Thick slices of bread dipped in a mixture of eggs and milk, then fried until golden brown. Served with powdered sugar and syrup.',
    price: 8.99,
    imgSrc: './img/frenchtoast.jpg',
  },

  // Lunch
  {
    title: 'Chicken Caesar Salad',
    category: 'Lunch',
    description: 'Crisp romaine lettuce topped with grilled chicken, parmesan cheese, croutons, and Caesar dressing.',
    price: 10.99,
    imgSrc: './img/caesarsalad.jpg',
  },
  {
    title: 'Margherita Pizza',
    category: 'Lunch',
    description: 'Classic Italian pizza topped with fresh mozzarella, tomatoes, basil, and olive oil.',
    price: 12.49,
    imgSrc: './img/margheritapizza.jpg',
  },
  {
    title: 'BLT Sandwich',
    category: 'Lunch',
    description: 'Toasted bread filled with crispy bacon, lettuce, tomato, and mayonnaise.',
    price: 8.99,
    imgSrc: './img/bltsandwich.jpg',
  },

  // Shakes
  {
    title: 'Strawberry Milkshake',
    category: 'Shakes',
    description: 'Refreshing milkshake made with fresh strawberries and vanilla ice cream.',
    price: 5.49,
    imgSrc: './img/strawberrymilkshake.jpg',
  },
  {
    title: 'Vanilla Milkshake',
    category: 'Shakes',
    description: 'Classic vanilla milkshake topped with whipped cream and a cherry.',
    price: 4.99,
    imgSrc: './img/vanillamilkshake.jpg',
  },
  {
    title: 'Banana Smoothie',
    category: 'Shakes',
    description: 'Smoothie made with ripe bananas, yogurt, and a hint of honey.',
    price: 6.49,
    imgSrc: './img/bananasmoothie.jpg',
  },

  // Dinner
  {
    title: 'Grilled Salmon',
    category: 'Dinner',
    description: 'Freshly grilled salmon fillet served with roasted vegetables and lemon dill sauce.',
    price: 15.99,
    imgSrc: './img/grilledsalmon.jpg',
  },
  {
    title: 'Filet Mignon',
    category: 'Dinner',
    description: 'Tender filet mignon grilled to perfection and served with mashed potatoes and seasonal vegetables.',
    price: 24.99,
    imgSrc: './img/filetmignon.jpg',
  },
  {
    title: 'Vegetable Stir-Fry',
    category: 'Dinner',
    description: 'Assorted vegetables stir-fried in a savory sauce and served over steamed rice.',
    price: 12.99,
    imgSrc: './img/vegetablestirfry.jpg',
  },
];

window.onload = function () {
  const menuBtnList = document.querySelectorAll('header button');
  for (const menuBtn of menuBtnList) {
    menuBtn.addEventListener('click', () => {
      clickBtn(menuBtn.innerText);
    });
  }
  clickBtn('All');
};

function clickBtn(category) {
  const menuContainer = document.getElementById('menu');
  menuContainer.innerHTML = '';

  const filteredData = category === 'All' ? data : data.filter((item) => item.category === category);
  filteredData.map((item) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
      <img src="${item.imgSrc}" alt="${item.title}" />
      <div class="menu-item-info">
        <h2>
          <span>
            ${item.title}
          </span>
          <span>
            $${item.price}
          </span>
        </h2>
        <p>${item.description}</p> 
      </div>
    `;
    menuContainer.appendChild(menuItem);
  });
}
