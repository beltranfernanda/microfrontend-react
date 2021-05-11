import React, {useState} from 'react';
import GenreService from '../../api/GenreService';
import Carousel from '../../lib/Carousel/Carousel';
import './GenreCarousel.css'

const GenreCarousel = () => {
    const [genres, setGenres] = useState ([])
    const updateGenre = async () => {
        const genresData =  await GenreService.getGenres();
        setGenres(genresData);
        console.log(genres);
    }
    console.log(genres);
    return (
        <div className="genre-container">
            <Carousel items={genres} />
            <button onClick={updateGenre}>Update</button>
        </div>
    );
}

export default GenreCarousel;