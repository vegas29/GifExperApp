// import { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h2 className="text-white text-center py-5 text-4xl md:text-3xl uppercase animate__animated animate__fadeIn">{category}</h2>

            {loading && 
                <span class="loader"></span>
            }

            <div className="card-grid">
        
                { images.map(img => 
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    />
                )}

            </div>
        </>
        
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
 
export default GifGrid;