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
  const handleModalOpen = (id: number) => {
    const modal = document.getElementById(
      `my_modal_${id}`
    ) as HTMLDialogElement;
    modal?.showModal();
  };

  const handleModalClose = (id: number) => {
    const modal = document.getElementById(
      `my_modal_${id}`
    ) as HTMLDialogElement;
    modal?.close();
  };

  return (
    <>
      <div className="card card-side bg-green-400 min-h-[300px] shadow-xl">
        <figure>
          <img src={recipe.recipe.image} alt={recipe.recipe.name} />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">{recipe.recipe.name}</h2>
          <p className="font-bold">
            Time: {recipe.recipe.cooking_time} minutes
          </p>
          <p className="font-bold">Ingredients</p>
          <ul>
            {recipe.recipe.ingredients.map((ingredient) => (
              <li key={`${recipe.recipe.id}-${ingredient}`}>{ingredient}</li>
            ))}
          </ul>
          <div className="card-actions justify-end">
            <button
              type="button"
              onClick={() => handleModalOpen(recipe.recipe.id)}
              className="btn btn-success"
            >
              Detail
            </button>

            <dialog id={`my_modal_${recipe.recipe.id}`} className="modal">
              <div className="modal-box bg-green-400">
                <h3 className="font-bold text-3xl pb-3">
                  {recipe.recipe.name}
                </h3>
                <h2 className="font-bold">Ingredients</h2>
                <ul>
                  {recipe.recipe.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
                <h2 className="font-bold pt-4">Time: {recipe.recipe.cooking_time} minutes</h2>
                <h2 className="font-bold pt-4">Instructions</h2>
                <p>{recipe.recipe.instructions}</p>
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleModalClose(recipe.recipe.id)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
