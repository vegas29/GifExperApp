import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h2 className="text-white text-center py-5 text-4xl md:text-3xl uppercase animate__animated animate__fadeIn">{ category }</h2>

            {/* { isLoading && 
                <span class="loader"></span>
            } */}

            {/* Test Loader */}

            {
                isLoading && ( <h2>Cargando...</h2> )
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
 