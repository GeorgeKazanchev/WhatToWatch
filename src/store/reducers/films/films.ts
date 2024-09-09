import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../../types/film';

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
    }
});

export default filmsSlice.reducer;
export const { setPromoFilm, loadFilms } = filmsSlice.actions;
export type { FilmsState };
