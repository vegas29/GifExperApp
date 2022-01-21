import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <>
            <h1 className="text-white font-bold text-3xl md:text-4xl text-center border-b-2 pb-5">GifExpertApp</h1>
                <AddCategory
                    setCategories={setCategories}
                />

            {   
                
                categories.map(category => 
                    <GifGrid
                        key={category} 
                        category={category}
                    />
                )
            }
        </>
    );
}
 
export default GifExpertApp;