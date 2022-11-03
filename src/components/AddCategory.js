import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('HandleSubmit', inputValue);

        if(inputValue.trim().length >2){
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }

        
    }

    return (
        <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    onChange={handleInputChange}
                    value={inputValue}
                    className="mt-5 rounded-xl bg-gray-100 focus:outline-none focus:border-2 focs:border-gray-200 py-2 px-5"
                    placeholder="Digite el nombre del gif a buscar"
                />
        </form>
    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


 
export default AddCategory;