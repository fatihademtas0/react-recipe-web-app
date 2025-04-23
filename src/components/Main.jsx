import React from "react";

function Main() {
    return (
        <main>
            <form className='add-ingredient-form'>
                <input
                    aria-label='Add ingredient'
                    type='text'
                    placeholder='e.g. avacado'
                />

                <button>Add ingredient</button>
            </form>
        </main>
    );
}

export default Main;
