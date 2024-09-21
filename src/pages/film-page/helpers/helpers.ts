import { SIMILAR_FILMS_COUNT } from '../../../shared/consts/films';
import type { Film } from '../../../shared/types';

export const getSimilarFilms = (selectedFilm: Film, films: Film[]): Film[] => {
    return films
        .filter((film) => film.genre === selectedFilm.genre && film.id !== selectedFilm.id)
        .slice(0, SIMILAR_FILMS_COUNT);
};
