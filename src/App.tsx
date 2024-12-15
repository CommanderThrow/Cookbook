import "./App.css";
import type React from "react";
import { useState } from "react";
import recipes from "./data/recipe.json";

function App() {
  const [findRecipe, setFindRecipe] = useState("");

  const handleFindRecipe = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFindRecipe(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(findRecipe.toLowerCase())
  );

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
              <div key={recipe.id}>
                <h2>{recipe.name}</h2>
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <ul>
                  {recipe.ingredients.map((ingredient) => (
                    <li key={`${recipe.id}-${ingredient}`}>{ingredient}</li>
                  ))}
                </ul>
                <p>Cooking Time: {recipe.cooking_time} minutes</p>
                <p>{recipe.instructions}</p>
              </div>
            ))
          ) : (
            <p>No recipes found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
