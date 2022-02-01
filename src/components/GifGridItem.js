import PropTypes from 'prop-types';

const GifGridItem = ({id, title, url}) => {
    return (
        <div className="bg-white drop-shadow-xl flex flex-col justify-between card animate__animated animate__fadeIn animate__delay-2s">
            <img className="object-cover" src={url} alt={title}/>
            <h3 className="text-center capitalize p-5 text-md">{title}</h3>
            <p className="text-center bg-blue-500 text-white text-lg hover:bg-blue-600"><a href={url} target="_blank" rel="noreferrer">Ver Gif</a></p>
        </div>
    );
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default GifGridItem;