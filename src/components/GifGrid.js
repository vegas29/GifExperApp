// import { useState, useEffect } from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    console.log(images);

    return (
        <>
            <h2 className="text-white text-center py-5 text-4xl md:text-3xl uppercase animate__animated animate__fadeIn">{category}</h2>

            {loading && 
            <div className="spinner">
                <div className="cube1"></div>
                <div className="cube2"></div>
            </div>
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
 
export default GifGrid;