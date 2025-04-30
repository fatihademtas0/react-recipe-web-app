import React from "react";

function IngredientList({ ingredient, handleClick }) {
    return (
        <div>
            <section>
                {ingredient.length > 0 && (
                    <>
                        <h2>Ingredients on hand:</h2>

                        {/* ✅ UL bir kez, LI'ler tek tek key ile */}
                        <ul className='ingredients-list' aria-live='polite'>
                            {ingredient.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </>
                )}

                {ingredient.length > 3 && (
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
        </div>
    );
}

export default IngredientList;
