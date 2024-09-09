import React, { Fragment } from 'react';
import * as styles from './main.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';
import { MovieCard } from '../movie-card/movie-card';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';

export const Main: React.FC = () => {
    const promoFilm = useAppSelector((state) => state.films.promoFilm);
    const films = useAppSelector((state) => state.films.films);

    if (!promoFilm) {
        throw new Error('');    //  TODO: Handle this situation correctly
    }

    return (
        <Fragment>
            <MovieCard
                film={promoFilm}
            />

            <div className={styles.content}>
                <Catalog
                    films={films}
                />
                <Footer
                    isMainPage={true}
                />
            </div>
        </Fragment>
    );
};
