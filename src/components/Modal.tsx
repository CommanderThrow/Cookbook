interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  cooking_time: number;
  instructions: string;
}

interface ModalProps {
  recipe: Recipe;
}

const Modal = ({ recipe }: ModalProps) => {
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
      <div className="card-actions justify-end">
        <button
          type="button"
          onClick={() => handleModalOpen(recipe.id)}
          className="btn glass"
        >
          Detail
        </button>

        <dialog id={`my_modal_${recipe.id}`} className="modal">
          <div className="modal-box bg-green-500">
            <h3 className="font-bold text-3xl pb-3">{recipe.name}</h3>
            <h2 className="font-bold">Ingredients</h2>
            <ul className="pl-4 list-decimal">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="font-bold pt-4">
              Time: {recipe.cooking_time} minutes
            </h2>
            <h2 className="font-bold pt-4">Instructions</h2>
            <p>{recipe.instructions}</p>
            <div className="modal-action">
              <button
                type="button"
                className="btn glass"
                onClick={() => handleModalClose(recipe.id)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Modal;
