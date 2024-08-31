import React, { Fragment } from 'react';
import * as styles from './film-page.module.scss';
import { MovieCard } from '../movie-card/movie-card';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';

type Props = {
    film: Film,
    similarFilms: Film[],
    isAuthorized: boolean,
    authInfo: AuthInfo
};

export const FilmPage: React.FC<Props> = ({ film, similarFilms, isAuthorized, authInfo }) => {
    return (
        <Fragment>
            <MovieCard
                film={film}
                isAuthorized={isAuthorized}
                authInfo={authInfo}
                isFull={true}
            />
            <div className={styles.content}>
                <Catalog
                    films={similarFilms}
                    isSimilarShown={true}
                />
                <Footer
                    isMainPage={false}
                />
            </div>
        </Fragment>
    );
};
