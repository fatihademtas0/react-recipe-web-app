import React, { useState } from "react";

function Main() {
    const [ingredients, setIngredients] = useState([]);

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

        setIngredients((prev) => [...prev, newIngredient]);
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

            <ul>
                {ingredients &&
                    ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
            </ul>
        </main>
    );
}

export default Main;
