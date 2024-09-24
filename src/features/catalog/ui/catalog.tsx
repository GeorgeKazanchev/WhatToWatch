import React from 'react';
import * as styles from './catalog.module.scss';
import { SmallMovieCard } from '../../../entities/small-movie-card';
import { GenrePanel } from '../../../entities/genre-panel';
import { getCatalogTitle, getGenres } from '../helpers/helpers';
import type { Film } from '../../../shared/types';

type Props = {
    films: Film[],
    isGenresShown?: boolean,
    isSimilarShown?: boolean,
    children?: React.ReactNode
};

export const Catalog: React.FC<Props> = ({ films, isGenresShown = false, isSimilarShown = false, children }) => {
    const genres = getGenres(films);

    return (
        <section className={`${styles.catalog} ${isSimilarShown ? styles.catalogLikeThis : ''}`}>
            <h2 className={`${styles.title} ${isSimilarShown ? '' : styles.visuallyHidden}`}>
                {getCatalogTitle(films, isSimilarShown)}
            </h2>

            {isGenresShown && (
                <GenrePanel
                    genres={genres}
                />
            )}

            <div className={styles.movies}>
                {films.map((film) =>
                    <SmallMovieCard
                        key={film.id}
                        film={film}
                    />
                )}
            </div>

            {children}
        </section>
    );
};
