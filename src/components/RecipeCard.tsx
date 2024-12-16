import Modal from "./Modal";

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

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <>
      <div className="card card-side bg-green-500 min-h-[300px] shadow-xl">
        <figure>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "250px", height: "100%", objectFit: "cover" }}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <p className="font-bold">Time: {recipe.cooking_time} minutes</p>
          <p className="font-bold">Ingredients</p>
          <ul className="m-2 pl-2 list-decimal">
            {recipe.ingredients.map((ingredient) => (
              <li key={`${recipe.id}-${ingredient}`}>{ingredient}</li>
            ))}
          </ul>
          <Modal recipe={recipe} />
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
