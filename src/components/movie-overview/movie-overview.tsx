import React, { Fragment } from 'react';
import * as styles from './movie-overview.module.scss';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types/loader-data';
import { getRatingLevel } from '../../helpers';
import type { filmPageLoaderType } from '../../routes/loaders/film-page';

export const MovieOverview: React.FC = () => {
    const { film } = useLoaderData() as LoaderData<filmPageLoaderType>;

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
                {/* TODO: The description should be divided into several lines */}
                <p className={styles.detailsItem}>
                    {film.description}
                </p>

                <p className={`${styles.detailsItem} ${styles.director}`}>
                    <strong className={styles.detailsTitle}>Director:</strong> {film.director}
                </p>

                {/* TODO: Should be shown like this: ActorA, ActorB and ActorC */}
                <p className={`${styles.detailsItem} ${styles.starring}`}>
                    <strong className={styles.detailsTitle}>Starring:</strong> {film.starring.join(', ')}
                </p>
            </div>
        </Fragment>
    );
};
