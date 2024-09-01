import React from 'react';
import { promoFilm, films, authInfo } from '../../mocks/index';
import { FilmPage } from '../film-page/film-page';
import { SIMILAR_FILMS_COUNT } from '../../settings';
import { Film } from '../../types/film';

const getSimilarFilms = (selectedFilm: Film, films: Film[]): Film[] => {
    return films
        .filter((film) => film.genre === selectedFilm.genre)
        .slice(0, SIMILAR_FILMS_COUNT);
};

export const App = () => {
    const similarFilms = getSimilarFilms(promoFilm, films);
    return (
        <FilmPage
            film={promoFilm}
            similarFilms={similarFilms}
            isAuthorized={true}
            authInfo={authInfo}
        />
    );
};
