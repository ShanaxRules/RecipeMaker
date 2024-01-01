// Sample data for initial testing
let recipes = [
    { name: 'Pasta Carbonara', ingredients: 'Pasta, Eggs, Bacon, Parmesan Cheese', instructions: 'Cook pasta. Mix eggs, bacon, and cheese. Combine with pasta.' },
    { name: 'Chicken Stir Fry', ingredients: 'Chicken, Vegetables, Soy Sauce, Rice', instructions: 'Cook chicken and vegetables. Add soy sauce. Serve over rice.' }
];

// Function to display recipes on the page
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

// Function to save a new or edited recipe
function saveRecipe() {
    const recipeName = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    // Check if it's a new recipe or an edited one
    const currentIndex = document.getElementById('submit-button').dataset.index;

    if (currentIndex === undefined) {
        // Add new recipe
        recipes.push({ name: recipeName, ingredients, instructions });
    } else {
        // Edit existing recipe
        recipes[currentIndex] = { name: recipeName, ingredients, instructions };
        // Reset the data-index attribute
        document.getElementById('submit-button').removeAttribute('data-index');
    }

    // Clear form fields
    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
    document.getElementById('instructions').value = '';

    // Display updated list of recipes
    displayRecipes();
}

// Function to edit a recipe
function editRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('recipe-name').value = recipe.name;
    document.getElementById('ingredients').value = recipe.ingredients;
    document.getElementById('instructions').value = recipe.instructions;

    // Set data-index attribute to mark this as an edited recipe
    document.getElementById('submit-button').setAttribute('data-index', index);
}

// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Initial display of recipes
displayRecipes();
