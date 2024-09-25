import type { Film } from '../../../shared/types';

export const getCatalogTitle = (films: Film[], isSimilarShown: boolean): string | null => {
    if (!isSimilarShown) {
        return 'Catalog';
    }

    return films.length > 0 ? 'More like this' : null;
}
