import React from 'react';
import * as styles from './movie-card.module.scss';
import { Header } from '../header/header';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';

type Props = {
    film: Film,
    isAuthorized: boolean,
    authInfo: AuthInfo
};

export const MovieCard: React.FC<Props> = ({ film, isAuthorized, authInfo }) => {
    return (
        <section className={styles.card}>
            <div className={styles.background}>
                <img src={film.images.backgroundSrc} alt={film.title} />
            </div>

            <h1 className={styles.visuallyHidden}>WTW</h1>

            <Header
                isAuthorized={isAuthorized}
                avatarUrl={authInfo.avatarUrl}
                isMainPage={true} />

            <div className={styles.wrap}>
                <div className={styles.info}>
                    <div className={styles.poster}>
                        <img src={film.images.posterSrc} alt={`${film.images.posterSrc} poster`} width="218" height="327" />
                    </div>

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
                                    <use xlinkHref="#add"></use>
                                </svg>
                                <span>My list</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
