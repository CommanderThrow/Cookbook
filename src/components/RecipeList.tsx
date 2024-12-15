import { useState } from "react";
import RecipeCard from "./RecipeCard";
import recipes from "../data/recipe.json";

const RecipeList = () => {
  const [findRecipe, setFindRecipe] = useState("");

  const handleFindRecipe = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFindRecipe(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const nameMatch = recipe.name
      .toLowerCase()
      .includes(findRecipe.toLowerCase());

    const ingredientsMatch = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(findRecipe.toLowerCase())
    );
    return nameMatch || ingredientsMatch;
  });
  return (
    <>
      <div>
        <h1>Recipe Finder</h1>
        <input
          type="text"
          placeholder="Search recipes..."
          value={findRecipe}
          onChange={handleFindRecipe}
        />
        <div>
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default RecipeList;
