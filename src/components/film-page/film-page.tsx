import React, { Fragment } from 'react';
import * as styles from './film-page.module.scss';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types/loader-data';
import { MovieCard } from '../movie-card/movie-card';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';
import type { filmPageLoaderType } from '../../routes/loaders/film-page';

export const FilmPage: React.FC = () => {
    const { film, similarFilms } = useLoaderData() as LoaderData<filmPageLoaderType>;

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
