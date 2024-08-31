import React, { Fragment } from 'react';
import * as styles from './movie-details.module.scss';
import { Film } from '../../types/film';

type Props = {
    film: Film
};

const getRuntimeString = (runtimeInMinutes: number): string => {
    const MINUTES_IN_HOUR = 60;
    const runtime = Math.round(runtimeInMinutes);

    if (runtime === 0) {
        return '0';
    } else if (runtime > 0 && runtime < MINUTES_IN_HOUR) {
        return `${runtime}m`;
    } else if (runtime >= MINUTES_IN_HOUR) {
        const hours = Math.floor(runtimeInMinutes / MINUTES_IN_HOUR);
        const minutes = runtime - hours * MINUTES_IN_HOUR;
        return `${hours}h ${minutes}m`;
    } else {
        throw new RangeError(`Runtime (${runtime}) of the film is incorrect`);
    }
};

export const MovieDetails: React.FC<Props> = ({ film }) => {
    return (
        <div className={styles.text}>
            <div className={styles.textColumn}>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Director</strong>
                    <span className={styles.detailsValue}>{film.director}</span>
                </p>

                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Starring</strong>
                    <span className={styles.detailsValue}>
                        {film.starring.map((actor, index) => {
                            const separator = index === (film.starring.length - 1) ? '' : ',';
                            return (
                                <Fragment key={index}>
                                    {actor}{separator} <br />
                                </Fragment>
                            );
                        }
                        )}
                    </span>
                </p>
            </div>

            <div className={styles.textColumn}>
                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Run Time</strong>
                    <span className={styles.detailsValue}>{getRuntimeString(film.runtimeInMinutes)}</span>
                </p>

                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Genre</strong>
                    <span className={styles.detailsValue}>{film.genre}</span>
                </p>

                <p className={styles.detailsItem}>
                    <strong className={styles.detailsName}>Released</strong>
                    <span className={styles.detailsValue}>{film.releaseYear}</span>
                </p>
            </div>
        </div>
    );
};
