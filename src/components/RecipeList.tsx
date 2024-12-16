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
      <div className="flex flex-col justify-center items-center">
        <div className="pb-5">
          <h1 className="text-4xl font-bold py-5">Cookbook: Recipe Finder</h1>
          <input
            type="text"
            placeholder="Search recipes..."
            value={findRecipe}
            onChange={handleFindRecipe}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 px-5 gap-2 md:grid-cols-2 lg:grid-cols-3 min-h-[300px]">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))
        ) : (
          <p className="text-center col-span-full">No recipes found.</p>
        )}
      </div>
    </>
  );
};

export default RecipeList;
