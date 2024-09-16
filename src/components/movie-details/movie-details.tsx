import React, { Fragment } from 'react';
import * as styles from './movie-details.module.scss';
import { useLoaderData } from 'react-router-dom';
import { LoaderData } from '../../types/loader-data';
import { getRuntimeString } from '../../helpers';
import type { filmPageLoaderType } from '../../routes/loaders/film-page';

export const MovieDetails: React.FC = () => {
    const { film } = useLoaderData() as LoaderData<filmPageLoaderType>;

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
