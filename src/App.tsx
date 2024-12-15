import "./App.css";
import recipes from "./data/recipe.json";

function App() {
  return (
    <>
      <div>
        <h1>Recipe Finder</h1>
        <input type="text" placeholder="Search recipes..." disabled />
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={`${recipe.id}-${ingredient}`}>{ingredient}</li>
                ))}
              </ul>
              <p>{recipe.cooking_time}</p>
              <p>{recipe.instructions}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
