import { Film } from '../../types/film';

export const getGenres = (films: Film[]) => {
    return Array.from(new Set(films.map((film) => film.genre))).sort();
};
