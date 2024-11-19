document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get("id");

  let content = "<p>Loading...</>";
  document.querySelector("main").innerHTML = content;
  if (!recipeId) {
    content = `<p class="error">Invalid recipe.</p>`;
    document.querySelector("main").innerHTML = content;
    return;
  }

  const recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    content = `<p class="error">Invalid recipe.</p>`;
    document.querySelector("main").innerHTML = content;
    return;
  }

  document.title = `${recipe.title} - Recipe Void`;
  content = `
    <div class="recipe-container">
      <div class="recipe-header">
        <h1>${recipe.title}</h1>
        <div class="recipe-meta">
          <span>⭐ ${recipe.rating} (${recipe.reviews} reviews)</span>
          <span>Preptime: ${recipe.prepTime}</span>
          <span>Cook: ${recipe.cookTime}</span>
        </div>
      </div>

      <div class="recipe-image">
        <img src="${recipe.images[0]}" alt="${recipe.title}">
      </div>

      <div class="recipe-description">
        <p>${recipe.description}</p>
      </div>

      <div class="recipe-content">
        <div class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            ${recipe.ingredients
              .map(
                (ingredient) => `
              <li>${ingredient}</li>
            `
              )
              .join("")}
          </ul>
        </div>

        <div class="instructions">
          <h2>Instructions</h2>
          <ol>
            ${recipe.instructions
              .map(
                (instruction) => `
              <li>${instruction}</li>
            `
              )
              .join("")}
          </ol>
        </div>
      </div>
    </div>
  `;

  document.querySelector("main").innerHTML = content;
});
