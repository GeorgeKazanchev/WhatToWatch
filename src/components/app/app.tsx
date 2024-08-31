import React from 'react';
import { Main } from '../main/main';
import { promoFilm, films, authInfo } from '../../mocks/index';

export const App = () => {
    return (
        <Main
            promoFilm={promoFilm}
            films={films}
            authInfo={authInfo} />
    );
};
