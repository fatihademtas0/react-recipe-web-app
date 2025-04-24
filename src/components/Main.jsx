import React, { useState } from "react";

function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [inputValue, setInputValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (inputValue.trim() === "") return;

        setIngredients((prev) => [...prev, inputValue]);
        setInputValue("");
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className='add-ingredient-form'>
                <input
                    aria-label='Add ingredient'
                    type='text'
                    placeholder='e.g. avacado'
                    name='ingredient'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
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
