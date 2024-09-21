import React, { Fragment } from 'react';
import * as styles from './movie-card-info.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import type { Film } from '../../../shared/types';

type Props = {
    film: Film,
    isFull?: boolean
};

export const MovieCardInfo: React.FC<Props> = ({ film, isFull = false }) => {
    const authInfo = useAppSelector((state) => state.user.authInfo);
    const isAuthorized = authInfo ? true : false;

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
                        <Link
                            to={`/films/${film.id}/review`}
                            className={styles.button}
                        >
                            Add review
                        </Link>
                    )}
                </div>
            </div>
        </Fragment>
    );
};
