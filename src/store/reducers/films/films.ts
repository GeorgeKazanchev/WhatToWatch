import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../../shared/types/film';

type FilmsState = {
    promoFilm: Film | null,
    films: Film[]
};

const initialState: FilmsState = {
    promoFilm: null,
    films: []
};

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setPromoFilm: (state: FilmsState = initialState, action: PayloadAction<Film | null>) => {
            state.promoFilm = action.payload;
        },
        loadFilms: (state: FilmsState = initialState, action: PayloadAction<Film[]>) => {
            state.films = action.payload;
        }
    },
    selectors: {
        selectAllFilms: (state) => state.films,
        selectFilmById: (state, filmId: number) => {
            return state.films.find((film) => film.id === filmId);
        },
        selectFavoriteFilms: (state) => {
            return state.films.filter((film) => film.isFavorite);
        }
    }
});

export default filmsSlice.reducer;
export const { selectAllFilms, selectFilmById, selectFavoriteFilms } = filmsSlice.selectors;
export const { setPromoFilm, loadFilms } = filmsSlice.actions;
export type { FilmsState };
