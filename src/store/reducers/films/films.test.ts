import filmsReducer, { FilmsState, loadFilms, setPromoFilm } from './films';
import { it, expect } from '@jest/globals';
import { Film } from '../../../types/film';
import { promoFilm, films } from '../../../mocks/index';

type FilmsStateGetter = (promoFilm?: Film, films?: Film[]) => FilmsState;

const getInitialState: FilmsStateGetter = (promoFilm?: Film, films?: Film[]) => {
    return {
        promoFilm: promoFilm ?? null,
        films: films ?? []
    };
};

it('Should set a promo film to state', () => {
    expect(filmsReducer(getInitialState(), setPromoFilm(promoFilm)))
        .toEqual({
            promoFilm: promoFilm,
            films: []
        });
});

it('Should set null as a promo film', () => {
    const state = getInitialState(promoFilm);
    expect(filmsReducer(state, setPromoFilm(null)))
        .toEqual({
            promoFilm: null,
            films: []
        });
});

it('Should load films to state', () => {
    expect(filmsReducer(getInitialState(), loadFilms(films)))
        .toEqual({
            promoFilm: null,
            films: films
        });
});

it('Should load empty films list', () => {
    const state = getInitialState(undefined, films);
    expect(filmsReducer(state, loadFilms([])))
        .toEqual({
            promoFilm: null,
            films: []
        });
});
