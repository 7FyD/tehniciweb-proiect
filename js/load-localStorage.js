document.addEventListener("DOMContentLoaded", () => {
  // random data generated by AI (gpt o1)
  const sampleRecipes = [
    {
      id: "1",
      title: "Pasta Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It’s creamy, rich, and satisfying.",
      ingredients: [
        "200g pasta",
        "100g pancetta, diced",
        "2 large eggs",
        "50g parmesan cheese, grated",
        "Salt and pepper to taste",
      ],
      prepTime: "10 minutes",
      cookTime: "20 minutes",
      rating: 4,
      reviews: 2,
      instructions: [
        "Cook the pasta in a large pot of salted boiling water until al dente. Reserve a cup of pasta water before draining.",
        "While the pasta cooks, fry the pancetta in a pan over medium heat until crispy, then set aside.",
        "In a bowl, whisk together the eggs and grated parmesan cheese until smooth.",
        "Add the pasta to the pan with pancetta and mix. Off the heat, quickly stir in the egg and cheese mixture, adding pasta water if needed for a creamy sauce.",
        "Season with salt and pepper to taste and serve immediately.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "2",
      title: "Tomato Soup",
      description:
        "A warm and comforting homemade tomato soup made with fresh tomatoes and aromatic spices.",
      ingredients: [
        "500g ripe tomatoes, chopped",
        "1 medium onion, diced",
        "2 cloves garlic, minced",
        "2 cups vegetable broth",
        "Salt and pepper to taste",
      ],
      prepTime: "10 minutes",
      cookTime: "30 minutes",
      rating: 4.5,
      reviews: 8,
      instructions: [
        "Heat a large pot over medium heat. Add the onion and garlic, and sauté until soft.",
        "Add the tomatoes and cook until they start breaking down, about 10 minutes.",
        "Pour in the vegetable broth, season with salt and pepper, and let the soup simmer for 15 minutes.",
        "Blend the soup until smooth using an immersion blender or a countertop blender.",
        "Serve hot, optionally garnished with fresh basil or a drizzle of olive oil.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "3",
      title: "Chicken Curry",
      description:
        "A flavorful and creamy chicken curry with a blend of spices and coconut milk.",
      ingredients: [
        "300g chicken breast, cubed",
        "1 can (400ml) coconut milk",
        "2 tbsp curry powder",
        "1 large onion, chopped",
        "1 tbsp oil",
        "Salt to taste",
      ],
      prepTime: "15 minutes",
      cookTime: "35 minutes",
      rating: 3.5,
      reviews: 5,
      instructions: [
        "Heat oil in a large skillet over medium heat. Add the chopped onion and sauté until translucent.",
        "Add the chicken cubes and cook until they are no longer pink.",
        "Sprinkle the curry powder over the chicken and onions, stirring to coat evenly.",
        "Pour in the coconut milk, season with salt, and let it simmer for 20 minutes until the sauce thickens and the chicken is cooked through.",
        "Serve hot with rice or naan bread.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "4",
      title: "Grilled Cheese Sandwich",
      description:
        "A quick and delicious grilled cheese sandwich, perfect for a comforting snack or meal.",
      ingredients: [
        "2 slices of bread",
        "2 slices of cheese (cheddar or American)",
        "1 tbsp butter",
      ],
      prepTime: "5 minutes",
      cookTime: "10 minutes",
      rating: 5,
      reviews: 20,
      instructions: [
        "Butter one side of each bread slice.",
        "Place one slice of bread in a skillet over medium heat, butter side down, and top with cheese slices.",
        "Cover with the second slice of bread, butter side up.",
        "Cook until the bottom slice is golden brown, then flip and cook until the cheese is melted and the other side is golden.",
        "Serve warm.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "5",
      title: "Beef Stew",
      description:
        "A hearty and filling beef stew with tender pieces of beef and vegetables.",
      ingredients: [
        "500g beef chuck, cut into cubes",
        "3 medium potatoes, diced",
        "3 carrots, sliced",
        "1 large onion, diced",
        "4 cups beef broth",
        "Salt and pepper to taste",
      ],
      prepTime: "20 minutes",
      cookTime: "2 hours",
      rating: 4.2,
      reviews: 15,
      instructions: [
        "Season beef with salt and pepper. In a large pot, brown the beef on all sides over medium heat, then set aside.",
        "Add onions to the pot and cook until soft, scraping up any browned bits.",
        "Return the beef to the pot, add carrots and potatoes, and pour in the beef broth.",
        "Simmer for 1.5 to 2 hours, stirring occasionally, until the beef is tender.",
        "Serve hot with crusty bread.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "6",
      title: "Greek Salad",
      description:
        "A fresh and crunchy salad made with cucumber, tomatoes, olives, and feta cheese.",
      ingredients: [
        "1 cucumber, sliced",
        "2 tomatoes, chopped",
        "100g feta cheese, crumbled",
        "1/2 cup black olives",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
      ],
      prepTime: "10 minutes",
      cookTime: "0 minutes",
      rating: 3.8,
      reviews: 7,
      instructions: [
        "In a large bowl, combine cucumber, tomatoes, and olives.",
        "Add crumbled feta cheese and drizzle with olive oil.",
        "Season with salt and pepper, and toss gently to combine.",
        "Serve fresh, optionally with a sprinkle of oregano.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "7",
      title: "Avocado Toast",
      description:
        "A simple yet delicious avocado toast topped with a sprinkle of salt and red pepper flakes.",
      ingredients: [
        "1 ripe avocado, mashed",
        "2 slices whole-grain bread",
        "1 tbsp olive oil",
        "Salt to taste",
        "Red pepper flakes, optional",
      ],
      prepTime: "5 minutes",
      cookTime: "5 minutes",
      rating: 4.3,
      reviews: 10,
      instructions: [
        "Toast the bread slices until golden and crisp.",
        "Spread mashed avocado on each slice.",
        "Drizzle olive oil over the avocado.",
        "Season with salt and red pepper flakes as desired.",
        "Serve immediately.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "8",
      title: "Chicken Caesar Salad",
      description:
        "A classic Caesar salad with tender chicken, crisp romaine lettuce, and creamy Caesar dressing.",
      ingredients: [
        "200g cooked chicken breast, sliced",
        "4 cups romaine lettuce, chopped",
        "1/4 cup Caesar dressing",
        "1/4 cup grated parmesan cheese",
        "1/2 cup croutons",
      ],
      prepTime: "10 minutes",
      cookTime: "0 minutes",
      rating: 4.6,
      reviews: 12,
      instructions: [
        "In a large bowl, add romaine lettuce, chicken slices, and croutons.",
        "Pour Caesar dressing over the salad and toss to combine.",
        "Top with grated parmesan cheese.",
        "Serve chilled.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "9",
      title: "Baked Salmon",
      description:
        "A healthy baked salmon with a light lemon and garlic flavor, perfect for a quick dinner.",
      ingredients: [
        "2 salmon fillets",
        "1 lemon, sliced",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "1 tbsp olive oil",
      ],
      prepTime: "5 minutes",
      cookTime: "15 minutes",
      rating: 4.8,
      reviews: 9,
      instructions: [
        "Preheat oven to 400°F (200°C).",
        "Place salmon fillets on a baking sheet lined with parchment paper.",
        "Top each fillet with minced garlic, lemon slices, olive oil, salt, and pepper.",
        "Bake for 12-15 minutes until salmon is cooked through and flakes easily.",
        "Serve with a side of vegetables.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "10",
      title: "Veggie Stir-Fry",
      description:
        "A quick and colorful vegetable stir-fry with a savory sauce, perfect for a healthy meal.",
      ingredients: [
        "1 bell pepper, sliced",
        "1 zucchini, sliced",
        "1 cup broccoli florets",
        "2 tbsp soy sauce",
        "1 tbsp olive oil",
        "1 clove garlic, minced",
      ],
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      rating: 4.2,
      reviews: 8,
      instructions: [
        "Heat olive oil in a large skillet over medium heat.",
        "Add garlic and cook until fragrant.",
        "Add bell pepper, zucchini, and broccoli. Stir-fry for 5-7 minutes.",
        "Add soy sauce and cook for another 2-3 minutes.",
        "Serve hot over rice or noodles.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "11",
      title: "Lentil Soup",
      description:
        "A hearty and nutritious lentil soup, perfect for chilly days.",
      ingredients: [
        "1 cup lentils",
        "1 large carrot, diced",
        "1 celery stalk, diced",
        "1 onion, chopped",
        "4 cups vegetable broth",
        "Salt and pepper to taste",
      ],
      prepTime: "10 minutes",
      cookTime: "40 minutes",
      rating: 4.5,
      reviews: 15,
      instructions: [
        "Heat oil in a large pot and sauté onions until soft.",
        "Add carrots and celery, and cook for 5 minutes.",
        "Add lentils and vegetable broth, and bring to a boil.",
        "Reduce heat and simmer for 30 minutes until lentils are tender.",
        "Season with salt and pepper to taste and serve warm.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "12",
      title: "Spaghetti Bolognese",
      description: "A traditional Italian pasta dish with a rich meat sauce.",
      ingredients: [
        "200g ground beef",
        "1/2 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup tomato sauce",
        "200g spaghetti",
        "Salt and pepper to taste",
      ],
      prepTime: "10 minutes",
      cookTime: "30 minutes",
      rating: 4.7,
      reviews: 18,
      instructions: [
        "Cook spaghetti according to package instructions and set aside.",
        "In a skillet, sauté onions and garlic until soft.",
        "Add ground beef and cook until browned.",
        "Add tomato sauce, season with salt and pepper, and simmer for 15 minutes.",
        "Serve the sauce over the spaghetti.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "13",
      title: "Blueberry Pancakes",
      description:
        "Fluffy pancakes filled with fresh blueberries, perfect for breakfast.",
      ingredients: [
        "1 cup flour",
        "1 tbsp sugar",
        "1 tsp baking powder",
        "1/2 cup milk",
        "1 large egg",
        "1/2 cup blueberries",
      ],
      prepTime: "10 minutes",
      cookTime: "15 minutes",
      rating: 4.4,
      reviews: 20,
      instructions: [
        "In a bowl, mix flour, sugar, and baking powder.",
        "Add milk and egg, and whisk until smooth.",
        "Fold in blueberries gently.",
        "Heat a skillet over medium heat and pour batter to form pancakes.",
        "Cook each side until golden, then serve warm with syrup.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "14",
      title: "Stuffed Bell Peppers",
      description:
        "Bell peppers stuffed with a savory mixture of rice, ground beef, and cheese.",
      ingredients: [
        "4 large bell peppers",
        "200g ground beef",
        "1/2 cup cooked rice",
        "1/2 cup shredded cheese",
        "Salt and pepper to taste",
      ],
      prepTime: "15 minutes",
      cookTime: "40 minutes",
      rating: 4.3,
      reviews: 7,
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Cut the tops off the bell peppers and remove seeds.",
        "In a skillet, cook ground beef until browned, then mix with cooked rice and season.",
        "Stuff each bell pepper with the mixture and top with cheese.",
        "Place peppers in a baking dish and bake for 30-40 minutes.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "15",
      title: "Shrimp Scampi",
      description:
        "A quick and delicious shrimp scampi with garlic, butter, and a hint of lemon.",
      ingredients: [
        "200g shrimp, peeled and deveined",
        "2 tbsp butter",
        "3 cloves garlic, minced",
        "1/4 cup white wine or chicken broth",
        "1 tbsp lemon juice",
        "Salt and pepper to taste",
        "2 tbsp fresh parsley, chopped",
      ],
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      rating: 4.6,
      reviews: 11,
      instructions: [
        "Heat butter in a large skillet over medium heat.",
        "Add minced garlic and cook until fragrant, about 1 minute.",
        "Add shrimp, salt, and pepper, and cook until shrimp turn pink, about 2-3 minutes per side.",
        "Pour in wine or chicken broth and add lemon juice. Let it simmer for 2 minutes.",
        "Garnish with fresh parsley and serve hot.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "16",
      title: "Beef Tacos",
      description:
        "Classic beef tacos with seasoned ground beef, lettuce, and cheese in soft tortillas.",
      ingredients: [
        "300g ground beef",
        "1 tbsp taco seasoning",
        "1/4 cup water",
        "8 small flour tortillas",
        "1 cup shredded lettuce",
        "1/2 cup shredded cheese",
        "1/4 cup sour cream, optional",
      ],
      prepTime: "15 minutes",
      cookTime: "10 minutes",
      rating: 4.7,
      reviews: 14,
      instructions: [
        "In a skillet, cook ground beef over medium heat until browned.",
        "Add taco seasoning and water, stir, and let it simmer for 5 minutes.",
        "Warm the tortillas in a pan or microwave.",
        "Assemble the tacos by placing beef in each tortilla, then adding lettuce, cheese, and sour cream.",
        "Serve immediately.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "17",
      title: "Banana Bread",
      description:
        "Moist and flavorful banana bread, perfect for breakfast or a snack.",
      ingredients: [
        "3 ripe bananas, mashed",
        "1/2 cup sugar",
        "1/4 cup melted butter",
        "1 large egg",
        "1 tsp vanilla extract",
        "1 cup flour",
        "1 tsp baking soda",
        "1/2 tsp salt",
      ],
      prepTime: "15 minutes",
      cookTime: "60 minutes",
      rating: 4.8,
      reviews: 19,
      instructions: [
        "Preheat oven to 350°F (175°C). Grease a 9x5 inch loaf pan.",
        "In a bowl, mix mashed bananas, sugar, melted butter, egg, and vanilla.",
        "In another bowl, whisk together flour, baking soda, and salt.",
        "Combine wet and dry ingredients and mix until just combined.",
        "Pour batter into the loaf pan and bake for 60 minutes or until a toothpick comes out clean.",
        "Cool before slicing.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "18",
      title: "Egg Fried Rice",
      description:
        "Quick and easy egg fried rice with vegetables, perfect for a speedy meal.",
      ingredients: [
        "2 cups cooked rice",
        "2 large eggs, beaten",
        "1/2 cup frozen peas and carrots",
        "2 tbsp soy sauce",
        "1 tbsp vegetable oil",
        "2 green onions, chopped",
      ],
      prepTime: "10 minutes",
      cookTime: "10 minutes",
      rating: 4.4,
      reviews: 15,
      instructions: [
        "Heat oil in a large skillet or wok over medium heat.",
        "Add beaten eggs and scramble until fully cooked, then set aside.",
        "In the same skillet, add frozen peas and carrots and cook until heated through.",
        "Add rice, soy sauce, and scrambled eggs, stirring to combine.",
        "Garnish with green onions and serve hot.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "19",
      title: "Vegetable Curry",
      description:
        "A creamy and flavorful vegetable curry made with a medley of fresh veggies and aromatic spices.",
      ingredients: [
        "1 tbsp vegetable oil",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tbsp curry powder",
        "1/2 tsp turmeric powder",
        "1/2 cup coconut milk",
        "1 cup vegetable broth",
        "1 cup cauliflower florets",
        "1 cup diced carrots",
        "1 cup diced potatoes",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish",
      ],
      prepTime: "15 minutes",
      cookTime: "30 minutes",
      rating: 4.5,
      reviews: 17,
      instructions: [
        "Heat oil in a large pot over medium heat. Add onions and cook until translucent.",
        "Add garlic, curry powder, and turmeric, and cook for 1 minute until fragrant.",
        "Add coconut milk and vegetable broth, stirring to combine.",
        "Add cauliflower, carrots, and potatoes. Season with salt and pepper.",
        "Bring to a boil, then reduce heat and simmer for 20-25 minutes until vegetables are tender.",
        "Garnish with fresh cilantro and serve with rice or naan.",
      ],
      images: ["../public/meatballs.jpg"],
    },
    {
      id: "20",
      title: "Miso Soup",
      description:
        "A traditional Japanese soup with miso paste, tofu, and seaweed.",
      ingredients: [
        "1 tbsp miso paste",
        "1/2 cup tofu, cubed",
        "1 sheet seaweed, cut into strips",
        "1 green onion, chopped",
      ],
      prepTime: "5 minutes",
      cookTime: "10 minutes",
      rating: 4.0,
      reviews: 5,
      instructions: [
        "Heat water in a pot over medium heat until warm (not boiling).",
        "Add miso paste and stir until dissolved.",
        "Add tofu and seaweed, and let it simmer for 5 minutes.",
        "Serve topped with chopped green onions.",
      ],
      images: ["../public/meatballs.jpg"],
    },
  ];
  const loadSampleData = () => {
    localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
  };
  document
    .getElementById("load-data-button")
    .addEventListener("click", loadSampleData);
});
