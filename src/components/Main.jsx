import React, { useState } from "react";
import RecipeShown from "./RecipeShown";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = useState("");

    const [language, setLanguage] = useState("en");

    const [inputValue, setInputValue] = useState("");

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");

        if (newIngredient.trim() === "") return;

        setIngredients((prev) => [...prev, newIngredient]);
    }

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        const trimmed = inputValue.trim();
        if (trimmed === "") return;

        setIngredients((prev) => [...prev, trimmed]);
        setInputValue(""); // input temizleniyor
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(
            ingredients,
            language
        );

        setRecipe(recipeMarkdown);

        console.log(recipeMarkdown);
    }

    function handleChange(e) {
        e.preventDefault();
        setLanguage(e.target.value);
    }

    return (
        <main>
            <form onSubmit={handleFormSubmit} className='add-ingredient-form'>
                <input
                    aria-label={
                        language === "en" ? "Add ingredient" : "Malzeme ekle"
                    }
                    type='text'
                    placeholder={language === "en" ? "e.g. avacado" : "tavuk"}
                    name='ingredient'
                    value={inputValue}
                    onChange={handleInputChange}
                />

                <button>
                    {language === "en" ? "Add ingredient" : "Malzeme ekle"}
                </button>

                <label htmlFor='language' className='language-label'>
                    {language === "en" ? "Language :" : "Dil seçin :"}
                </label>
                <select
                    id='language'
                    name='language'
                    value={language}
                    onChange={handleChange}
                    className='language-select'
                >
                    <option value='en'>
                        {language === "en" ? "English" : "İngilizce"}
                    </option>
                    <option value='tr'>
                        {language !== "en" ? "Türkçe" : "Turkish"}
                    </option>
                </select>
            </form>

            <IngredientList
                ingredient={ingredients}
                getRecipe={getRecipe}
                language={language}
            />

            {recipe && <RecipeShown recipe={recipe} />}
        </main>
    );
}

export default Main;
