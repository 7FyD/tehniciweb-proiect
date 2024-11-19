document.addEventListener("DOMContentLoaded", () => {
  const loadRecipes = () => {
    return JSON.parse(localStorage.getItem("recipes")) || [];
  };

  // sort recipes by different criterias
  const sortRecipes = (recipes, criteria) => {
    switch (criteria) {
      case "rating":
        return recipes.sort((a, b) => b.rating - a.rating);
      case "time":
        return recipes.sort((a, b) => getTotalTime(a) - getTotalTime(b));
      case "a-z":
        return recipes.sort((a, b) => a.title.localeCompare(b.title));
      case "z-a":
        return recipes.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return recipes;
    }
  };

  const getTotalTime = (recipe) => {
    const prepTime = parseInt(recipe.prepTime) || 0;
    const cookTime = parseInt(recipe.cookTime) || 0;
    return prepTime + cookTime;
  };

  const displayRecipes = (recipes) => {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = "";

    recipes.forEach((recipe) => {
      const card = document.createElement("a");
      card.classList.add("recipe-card");
      card.href = `recipe.html?id=${recipe.id}`;

      if (recipe.images && recipe.images.length > 0) {
        const img = document.createElement("img");
        img.src = recipe.images[0];
        img.alt = recipe.title;
        img.classList.add("recipe-image");
        card.appendChild(img);
      }

      const informationContainer = document.createElement("div");
      informationContainer.classList.add("information-container");

      const title = document.createElement("h2");
      title.textContent = recipe.title;
      informationContainer.appendChild(title);

      const detailsContainer = document.createElement("div");
      detailsContainer.classList.add("details");

      const prepTime = document.createElement("p");
      prepTime.textContent = `Prep time: ${recipe.prepTime || "N/A"}`;
      const cookTime = document.createElement("p");
      cookTime.textContent = `Cook time: ${recipe.cookTime || "N/A"}`;

      detailsContainer.appendChild(prepTime);
      detailsContainer.appendChild(cookTime);
      informationContainer.appendChild(detailsContainer);

      const ratingContainer = document.createElement("div");
      ratingContainer.classList.add("rating");

      const reviews = document.createElement("p");
      const noun = recipe.reviews === 1 ? "review" : "reviews";
      reviews.textContent = `${recipe.reviews || 0} ${noun}`;

      const starsContainer = document.createElement("div");
      starsContainer.classList.add("starsContainer");
      createStars(recipe.rating, starsContainer);
      ratingContainer.appendChild(starsContainer);
      ratingContainer.appendChild(reviews);
      informationContainer.appendChild(ratingContainer);

      card.appendChild(informationContainer);
      recipeContainer.appendChild(card);
    });
  };

  const createStars = (rating, container) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>`;
      container.appendChild(star);
    }

    if (halfStar) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.74L14.81 9.12L12 2.5L9.19 9.13L2 9.74L7.46 14.47L5.82 21.5L12 17.77L18.18 21.5L16.55 14.47L22 9.74ZM12 15.9V6.6L13.71 10.64L18.09 11.02L14.77 13.9L15.77 18.18L12 15.9Z"/>
        </svg>`;
      container.appendChild(star);
    }

    for (let i = 0; i < emptyStars; i++) {
      const star = document.createElement("span");
      star.classList.add("star");
      star.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z"/>
        </svg>`;
      container.appendChild(star);
    }
  };

  const init = () => {
    const recipes = loadRecipes();
    const sortSelect = document.getElementById("sort-by");
    const sortButton = document.getElementById("sort-button");

    const urlParams = new URLSearchParams(window.location.search);
    const sortBy = urlParams.get("sort") || "";
    sortSelect.value = sortBy.length > 0 ? sortBy : "default";

    const sortedRecipes = sortRecipes(recipes, sortBy);
    displayRecipes(sortedRecipes);

    sortButton.addEventListener("click", () => {
      const selectedSort = sortSelect.value;
      urlParams.set("sort", selectedSort);
      window.history.replaceState(null, "", `?${urlParams.toString()}`);

      const sortedRecipes = sortRecipes(recipes, selectedSort);
      displayRecipes(sortedRecipes);
    });
  };

  init();
});
