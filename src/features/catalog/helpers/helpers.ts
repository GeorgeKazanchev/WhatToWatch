import type { Film } from '../../../shared/types';

export const getGenres = (films: Film[]): string[] => {
    return Array.from(new Set(films.map((film) => film.genre))).sort();
};

export const getCatalogTitle = (films: Film[], isSimilarShown: boolean): string | null => {
    if (!isSimilarShown) {
        return 'Catalog';
    }

    return films.length > 0 ? 'More like this' : null;
}
