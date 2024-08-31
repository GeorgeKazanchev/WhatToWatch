import React, { Fragment } from 'react';
import * as styles from './main.module.scss';
import { MovieCard } from '../movie-card/movie-card';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';
import { authInfo } from '../../mocks/index';

type Props = {
    promoFilm: Film,
    films: Film[],
    authInfo: AuthInfo
};

export const Main: React.FC<Props> = ({ promoFilm, films }) => {
    return (
        <Fragment>
            <MovieCard
                film={promoFilm}
                isAuthorized={true}
                authInfo={authInfo} />

            <div className={styles.content}>
                <Catalog
                    films={films} />
                <Footer
                    isMainPage={true} />
            </div>
        </Fragment>
    );
};
