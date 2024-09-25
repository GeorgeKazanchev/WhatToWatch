import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES_TITLE } from '../../../shared/consts/films';
import type { Film } from '../../../shared/types/film';

type FilmsState = {
    promoFilm: Film | null,
    films: Film[],
    shownFilms: Film[],
    selectedGenre: string
};

const initialState: FilmsState = {
    promoFilm: null,
    films: [],
    shownFilms: [],
    selectedGenre: ALL_GENRES_TITLE
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
            state.shownFilms = action.payload;
        },
        setSelectedGenre: (state: FilmsState = initialState, action: PayloadAction<string>) => {
            state.selectedGenre = action.payload;
            state.shownFilms = state.selectedGenre === ALL_GENRES_TITLE
                ? state.films
                : state.films.filter((film) => film.genre === state.selectedGenre);
        }
    },
    selectors: {
        selectAllFilms: (state) => state.films,
        selectAllGenres: (state) => Array.from(new Set(state.films.map((film) => film.genre))).sort(),
        selectFilmById: (state, filmId: number) => {
            return state.films.find((film) => film.id === filmId);
        },
        selectFavoriteFilms: (state) => {
            return state.films.filter((film) => film.isFavorite);
        }
    }
});

export default filmsSlice.reducer;
export const { selectAllFilms, selectAllGenres, selectFilmById, selectFavoriteFilms } = filmsSlice.selectors;
export const { setPromoFilm, loadFilms, setSelectedGenre } = filmsSlice.actions;
export type { FilmsState };
