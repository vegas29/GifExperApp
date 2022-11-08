import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
        
    }

    return (
        <form
            onSubmit={handleSubmit}
            aria-label="form"
        >
            <input
                type="text"
                onChange={ handleInputChange }
                value={ inputValue }
                className="mt-5 rounded-xl bg-gray-100 focus:outline-none focus:border-2 focs:border-gray-200 py-2 px-5 text-xl"
                placeholder="Digite el nombre del gif a buscar"
            />
        </form>
    );

}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}

