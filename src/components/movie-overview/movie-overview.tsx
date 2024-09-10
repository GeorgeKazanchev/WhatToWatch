import React, { Fragment } from 'react';
import * as styles from './movie-overview.module.scss';
import { Film } from '../../types/film';
import { getRatingLevel } from '../../helpers';

type Props = {
    film: Film
};

export const MovieOverview: React.FC<Props> = ({ film }) => {
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

            <div className={styles.text}>
                {/* TODO: The description should be divided into several lines */}
                <p>
                    {film.description}
                </p>

                <p className={styles.director}>
                    <strong>Director: {film.director}</strong>
                </p>

                {/* TODO: Should be shown like this: ActorA, ActorB and ActorC */}
                <p className={styles.starring}>
                    <strong>Starring: {film.starring.join(', ')}</strong>
                </p>
            </div>
        </Fragment>
    );
};
