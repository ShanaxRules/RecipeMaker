let recipes = [
    { name: 'Chicken Curry', ingredients: 'Onion , Indian Masala , Chicken , Red chilli', instructions: 'Cook the chicken and mix the the pastings. Serve hot.' },
    { name: 'Chicken Stir Fry', ingredients: 'Chicken, Vegetables, Soy Sauce, Rice', instructions: 'Cook chicken and vegetables. Add soy sauce. Serve over rice.' }
];

function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
            <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeItem);
    });
}


function saveRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    const currentIndex = document.getElementById('submit-button').dataset.index;

    if (currentIndex === undefined) {
        recipes.push({ name: recipeName, ingredients, instructions });
    } else {
        recipes[currentIndex] = { name: recipeName, ingredients, instructions };
        document.getElementById('submit-button').removeAttribute('data-index');
    }

    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';

    displayRecipes();
}

function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;

    document.getElementById('submit-button').setAttribute('data-index', index);
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

displayRecipes();
