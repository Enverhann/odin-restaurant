export function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('tab-content');
    const menuList = document.createElement('ul');

    const foodItem1 = document.createElement('li');
    foodItem1.innerHTML =  `   
    <div class="menu-item">
        <img src="../src/images/spaghetti-carbonara.webp" alt="Spaghetti Carbonara" class="food-image">
        <div class="menu-description">
            <h3>Spaghetti Carbonara</h3>
            <p>Consisting of spaghetti (long thin strands of pasta) with bacon and a creamy sauce made from eggs, Pecorino or Parmesan, and black pepper.</p>
        </div>
    </div>
    `;
    menuList.appendChild(foodItem1);

    const foodItem2 = document.createElement('li');
    foodItem2.innerHTML =   ` 
    <div class="menu-item">
        <img src="../src/images/margherita-pizza.jpeg" alt="Spaghetti Carbonara" class="food-image">
        <div class="menu-description">
            <h3>Margherita Pizza</h3>
            <p>Margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.</p>
        </div>
    </div>`;
    menuList.appendChild(foodItem2);

    const foodItem3 = document.createElement('li');
    foodItem3.innerHTML =
    `<div class="menu-item">
        <img src="../src/images/grilled-salmon.jpeg" alt="Grilled Salmon" class="food-image">
        <div class="menu-description">
            <h3>Grilled Salmon</h3>
            <p>Grilled salmon is salmon that has been cooked over coals or a gas flame and is one of the oldest fish preparations known.</p>
        </div>
    </div>`;
    menuList.appendChild(foodItem3);

    const foodItem4 = document.createElement('li');
    foodItem4.innerHTML =
    `<div class="menu-item">
        <img src="../src/images/caesar-salad.jpeg" alt="Caesar Salad" class="food-image">
        <div class="menu-description">
            <h3>Caesar Salad</h3>
            <p>Caesar salad is made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.</p>
        </div>
    </div>`;
    menuList.appendChild(foodItem4);

    const foodItem5 = document.createElement('li');
    foodItem5.innerHTML =
    `<div class="menu-item">
        <img src="../src/images/beef-burger.webp" alt="Beef Burger" class="food-image">
        <div class="menu-description">
            <h3>Beef Burger</h3>
            <p>The classic burger is an all-time BBQ favorite! This super easy homemade beef burger recipe gives you delicious patties, packed with onions and herbs for extra flavor, that are perfect for topping with cheese, lettuce, tomato, and sandwiching between floury buns.</p>
        </div>
    </div>`;
    menuList.appendChild(foodItem5);

    const foodItem6 = document.createElement('li');
    foodItem6.innerHTML =
    `<div class="menu-item">
        <img src="../src/images/vegetable-stir-fry.jpeg" alt="Vegetable Stir Fry" class="food-image">
        <div class="menu-description">
            <h3>Vegetable Stir Fry</h3>
            <p>Vegetable Stir Fry is a mixture of colorful vegetables sautéed in a sweet and savory sauce that makes for a simple weeknight meal!</p>
        </div>
    </div>`;

    menuList.appendChild(foodItem6);

    menuDiv.appendChild(menuList);
    content.appendChild(menuDiv);
}
