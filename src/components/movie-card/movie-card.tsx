import React from 'react';
import * as styles from './movie-card.module.scss';
import { MovieCardContent } from '../movie-card-content/movie-card-content';
import { MovieOverview } from '../movie-overview/movie-overview';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';

type Props = {
    film: Film,
    isAuthorized: boolean,
    authInfo: AuthInfo,
    isFull?: boolean
};

export const MovieCard: React.FC<Props> = ({ film, isAuthorized, authInfo, isFull = false }) => {
    return (
        <section className={`${styles.card} ${isFull ? styles.cardFull : ''}`}>
            {isFull
                ? (
                    <div className={styles.hero}>
                        <MovieCardContent
                            film={film}
                            isAuthorized={isAuthorized}
                            authInfo={authInfo}
                            isFull={isFull}
                        />
                    </div>
                )
                : (
                    <MovieCardContent
                        film={film}
                        isAuthorized={isAuthorized}
                        authInfo={authInfo}
                        isFull={isFull}
                    />
                )
            }

            <div className={styles.wrap}>
                <div className={styles.info}>
                    <div className={styles.poster}>
                        <img src={film.images.posterSrc} alt={`${film.title} poster`} width="218" height="327" />
                    </div>

                    <div className={styles.description}>
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                <li className={`${styles.navItem} ${styles.navItemActive}`}>
                                    <a href="#" className={styles.navLink}>Overview</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Details</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Reviews</a>
                                </li>
                            </ul>
                        </nav>

                        <MovieOverview
                            film={film}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
