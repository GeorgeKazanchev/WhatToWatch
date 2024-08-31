import React from 'react';
import * as styles from './catalog.module.scss';
import { Film } from '../../types/film';
import { SmallMovieCard } from '../small-movie-card/small-movie-card';

type Props = {
    films: Film[]
};

export const Catalog: React.FC<Props> = ({ films }) => {
    const genres = Array.from(new Set(films.map((film) => film.genre))).sort();
    return (
        <section className={styles.catalog}>
            <h2 className={`${styles.title} ${styles.visuallyHidden}`}>Catalog</h2>

            <ul className={styles.genres}>
                <li className={`${styles.genre} ${styles.genreActive}`}>
                    <a href="#" className={styles.genreLink}>All genres</a>
                </li>

                {
                    genres.map((genre) =>
                        <li key={genre} className={styles.genre}>
                            <a href="#" className={styles.genreLink}>{genre}</a>
                        </li>
                    )
                }
            </ul>

            <div className={styles.movies}>
                {
                    films.map((film) =>
                        <SmallMovieCard
                            key={film.id}
                            film={film} />
                    )
                }
            </div>

            <div>
                <button className={styles.moreButton} type="button">Show more</button>
            </div>
        </section>
    );
};
