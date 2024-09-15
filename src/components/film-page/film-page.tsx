import React, { Fragment } from 'react';
import * as styles from './film-page.module.scss';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types/loader-data';
import { MovieCard } from '../movie-card/movie-card';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';
import { Film } from '../../types/film';

type filmLoaderType = ({ params }: LoaderFunctionArgs<unknown>) => Promise<{ film: Film, similarFilms: Film[] }>;

export const FilmPage: React.FC = () => {
    const { film, similarFilms } = useLoaderData() as LoaderData<filmLoaderType>;

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
