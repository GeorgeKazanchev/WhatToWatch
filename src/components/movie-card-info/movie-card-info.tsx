import React, { Fragment } from 'react';
import * as styles from './movie-card-info.module.scss';
import { Film } from '../../types/film';

type Props = {
    film: Film,
    isAuthorized: boolean,
    isFull?: boolean
};

export const MovieCardInfo: React.FC<Props> = ({ film, isAuthorized, isFull = false }) => {
    return (
        <Fragment>
            {!isFull && (
                <div className={styles.poster}>
                    <img src={film.images.posterSrc} alt={`${film.title} poster`} width="218" height="327" />
                </div>
            )}

            <div className={styles.description}>
                <h2 className={styles.title}>{film.title}</h2>

                <p className={styles.meta}>
                    <span className={styles.genre}>{film.genre}</span>
                    <span>{film.releaseYear}</span>
                </p>

                <div className={styles.buttons}>
                    <button className={styles.button} type="button">
                        <svg viewBox="0 0 19 19" width="19" height="19">
                            <use xlinkHref="#play-s"></use>
                        </svg>
                        <span>Play</span>
                    </button>
                    <button className={styles.button} type="button">
                        <svg viewBox="0 0 19 20" width="19" height="20">
                            <use xlinkHref={film.isFavorite ? '#in-list' : '#add'}></use>
                        </svg>
                        <span>My list</span>
                    </button>
                    {isAuthorized && (
                        <a href="add-review.html" className={styles.button}>Add review</a>
                    )}
                </div>
            </div>
        </Fragment>
    );
};
