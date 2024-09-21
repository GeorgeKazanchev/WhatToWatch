import React, { Fragment } from 'react';
import * as styles from './film-page.module.scss';
import { useParams } from 'react-router-dom';
import { MovieCard } from '../../../features/movie-card';
import { Catalog } from '../../../features/catalog';
import { Footer } from '../../../entities/footer';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { selectAllFilms, selectFilmById } from '../../../store/reducers/films/films';
import { getSimilarFilms } from '../helpers/helpers';

export const FilmPage: React.FC = () => {
    const { id } = useParams();
    const filmId = Number(id);

    const film = useAppSelector((state) => selectFilmById(state, filmId));
    if (!film) {
        throw new Error('Film is not found');
    }
    const similarFilms = getSimilarFilms(film, useAppSelector(selectAllFilms));

    return (
        <Fragment>
            <MovieCard
                film={film}
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
