import type { Film } from '../../../shared/types';

export const getGenres = (films: Film[]) => {
    return Array.from(new Set(films.map((film) => film.genre))).sort();
};
