import React from "react";

function IngredientList({ ingredient, getRecipe, language }) {
    return (
        <div>
            <section>
                {ingredient.length > 0 && (
                    <>
                        <h2>
                            {language === "en"
                                ? "Ingredients on hand:"
                                : "Elimizdeki malzemeler"}
                        </h2>

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
                            <h3>
                                {language === "en"
                                    ? "Ready for a recipe?"
                                    : "Tarifi almaya hazır mısın?"}
                            </h3>
                            <p>
                                {language === "en"
                                    ? "Generate a recipe from your list of ingredients."
                                    : "Malzeme listenizden bir tarif oluşturun."}
                            </p>
                        </div>

                        <button onClick={getRecipe}>
                            {language === "en" ? "Get a recipe" : "Tarif alın"}
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
}

export default IngredientList;
