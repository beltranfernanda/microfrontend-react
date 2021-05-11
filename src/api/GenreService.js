import {GenreObject} from '../config/constants';

const GenreService = {
    getGenres: async () => {
       const response = await fetch(`${GenreObject.URL_GET_GENRE}?api_key=${GenreObject.API_KEY}`);
       const data = await response.json();
       const dataFormatted = data.genres.map((item) => {
           return {
               id: item.id,
               title: item.name,
               bgColor: '#D3A1D3' 
           }
       })
       return dataFormatted;
    },
}

export default GenreService;