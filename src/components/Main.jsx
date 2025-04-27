import React, { useState } from "react";
import RecipeShown from "./RecipeShown";

function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [recipeShown, setRecipeShown] = useState(false);

    /*
    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        setIngredients((prev) => [...prev, inputValue]);
        setInputValue("");
    }
    */
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");

        if (newIngredient.trim() === "") return;

        setIngredients((prev) => [...prev, newIngredient]);
    }

    function handleClick() {
        setRecipeShown(true);
    }

    return (
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input
                    aria-label='Add ingredient'
                    type='text'
                    placeholder='e.g. avacado'
                    name='ingredient'
                />

                <button>Add ingredient</button>
            </form>

            <section>
                {ingredients.length > 0 && (
                    <>
                        <h2>Ingredients on hand:</h2>

                        {/* ✅ UL bir kez, LI'ler tek tek key ile */}
                        <ul className='ingredients-list' aria-live='polite'>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </>
                )}

                {ingredients.length > 3 && (
                    <div className='get-recipe-container'>
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>
                                Generate a recipe from your list of ingredients.
                            </p>
                        </div>

                        <button onClick={handleClick}>Get a recipe</button>
                    </div>
                )}
            </section>
            {recipeShown && <RecipeShown />}
        </main>
    );
}

export default Main;
