import React from 'react';
import * as styles from './catalog.module.scss';
import { SmallMovieCard } from '../small-movie-card/small-movie-card';
import { Film } from '../../types/film';
import { getGenres } from '../../helpers';

type Props = {
    films: Film[],
    isSimilarShown?: boolean
};

export const Catalog: React.FC<Props> = ({ films, isSimilarShown = false }) => {
    const genres = getGenres(films);

    return (
        <section className={`${styles.catalog} ${isSimilarShown ? styles.catalogLikeThis : ''}`}>
            <h2 className={`${styles.title} ${isSimilarShown ? '' : styles.visuallyHidden}`}>
                {isSimilarShown ? 'More like this' : 'Catalog'}
            </h2>

            {!isSimilarShown && (
                <ul className={styles.genres}>
                    <li className={`${styles.genre} ${styles.genreActive}`}>
                        <a href="#" className={styles.genreLink}>All genres</a>
                    </li>

                    {genres.map((genre) =>
                        <li key={genre} className={styles.genre}>
                            <a href="#" className={styles.genreLink}>{genre}</a>
                        </li>
                    )}
                </ul>
            )}

            <div className={styles.movies}>
                {films.map((film) =>
                    <SmallMovieCard
                        key={film.id}
                        film={film}
                    />
                )}
            </div>

            {!isSimilarShown && (
                <div>
                    <button className={styles.moreButton} type="button">Show more</button>
                </div>
            )}
        </section>
    );
};
