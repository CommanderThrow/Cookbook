import { useState } from "react";

interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  cooking_time: number;
  instructions: string;
}

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = (recipe: RecipeCardProps) => {
  const [showDetail, setShowDetail] = useState<number | null>(null);
  const toggleDetail = (id: number) => {
    setShowDetail((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div>
        <h2>{recipe.recipe.name}</h2>
        <img
          src={recipe.recipe.image}
          alt={recipe.recipe.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <ul>
          {recipe.recipe.ingredients.map((ingredient) => (
            <li key={`${recipe.recipe.id}-${ingredient}`}>{ingredient}</li>
          ))}
        </ul>
        <button type="button" onClick={() => toggleDetail(recipe.recipe.id)}>
          {showDetail === recipe.recipe.id ? "Hide Details" : "Show Details"}
        </button>
        {showDetail === recipe.recipe.id && (
          <div>
            <p>Cooking Time: {recipe.recipe.cooking_time} minutes</p>
            <p>{recipe.recipe.instructions}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default RecipeCard;
