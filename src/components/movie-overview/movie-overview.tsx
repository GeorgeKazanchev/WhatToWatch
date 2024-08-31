import React, { Fragment } from 'react';
import * as styles from './movie-overview.module.scss';
import { Film } from '../../types/film';

type Props = {
    film: Film
};

const getRatingLevel = (rating: number): string => {
    const ratingRounded = Math.round(rating * 10) / 10;
    if (ratingRounded >= 0 && ratingRounded < 3) {
        return 'Bad';
    } else if (ratingRounded >= 3 && ratingRounded < 5) {
        return 'Normal';
    } else if (ratingRounded >= 5 && ratingRounded < 8) {
        return 'Good';
    } else if (ratingRounded >= 8 && ratingRounded < 10) {
        return 'Very good';
    } else if (ratingRounded === 10) {
        return 'Awesome';
    } else {
        throw new RangeError(`Rating (${ratingRounded}) of the film is incorrect`);
    }
};

export const MovieOverview: React.FC<Props> = ({ film }) => {
    return (
        <Fragment>
            <div className={styles.rating}>
                <div className={styles.score}>{film.rating}</div>
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
