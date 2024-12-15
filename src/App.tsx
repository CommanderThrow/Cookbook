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
              <p>{recipe.instructions}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
