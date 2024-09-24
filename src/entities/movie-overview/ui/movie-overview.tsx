import React, { Fragment } from 'react';
import * as styles from './movie-overview.module.scss';
import { useParams } from 'react-router-dom';
import { getRatingLevel } from '../helpers/helpers';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { selectFilmById } from '../../../store/reducers/films/films';
import { MAX_SHOWN_ACTORS } from '../consts/consts';

export const MovieOverview: React.FC = () => {
    const { id } = useParams();
    const filmId = Number(id);

    const film = useAppSelector((state) => selectFilmById(state, filmId));
    if (!film) {
        throw new Error('Film is not found');
    }

    let starring = film.starring.slice(0, MAX_SHOWN_ACTORS).join(', ');
    if (film.starring.length > MAX_SHOWN_ACTORS) {
        starring += ' and other';
    }

    return (
        <Fragment>
            <div className={styles.rating}>
                <div className={styles.score}>{film.rating.toFixed(1)}</div>
                <p className={styles.meta}>
                    <span className={styles.level}>{getRatingLevel(film.rating)}</span>
                    <span className={styles.scoresCount}>
                        {`${film.scoresCount} ${film.scoresCount === 1 ? 'rating' : 'ratings'}`}
                    </span>
                </p>
            </div>

            <div className={styles.details}>
                <p className={styles.detailsItem}>
                    {film.description}
                </p>

                <p className={`${styles.detailsItem} ${styles.director}`}>
                    <strong className={styles.detailsTitle}>Director:</strong> {film.director}
                </p>

                <p className={`${styles.detailsItem} ${styles.starring}`}>
                    <strong className={styles.detailsTitle}>Starring:</strong> {starring}
                </p>
            </div>
        </Fragment>
    );
};
