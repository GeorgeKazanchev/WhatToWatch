import React from 'react';
import { Main } from '../main/main';
import { promoFilm, films, authInfo } from '../../mocks/index';
import { FilmPage } from '../film-page/film-page';

export const App = () => {
    return (
        <FilmPage
            film={promoFilm}
            similarFilms={films}
            isAuthorized={true}
            authInfo={authInfo}
        />
    );
};
