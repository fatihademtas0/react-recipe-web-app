import React from "react";
import Markdown from "react-markdown";

function RecipeShown({ recipe }) {
    return (
        <section className='suggested-recipe-container'>
            <Markdown>{recipe}</Markdown>
        </section>
    );
}

export default RecipeShown;
