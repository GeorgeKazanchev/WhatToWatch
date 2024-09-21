import React from 'react';
import * as styles from './movie-card.module.scss';
import { Outlet } from 'react-router-dom';
import { MovieCardContent } from '../../../entities/movie-card-content';
import { MovieNav } from '../../movie-nav';
import type { Film } from '../../../shared/types';

type Props = {
    film: Film,
    isFull?: boolean
};

export const MovieCard: React.FC<Props> = ({ film, isFull = false }) => {
    return (
        <section className={`${styles.card} ${isFull ? styles.cardFull : ''}`}>
            {isFull
                ? (
                    <div className={styles.hero}>
                        <MovieCardContent
                            film={film}
                            isFull={isFull}
                        />
                    </div>
                )
                : (
                    <MovieCardContent
                        film={film}
                        isFull={isFull}
                    />
                )
            }

            {isFull && (
                <div className={styles.wrap}>
                    <div className={styles.info}>
                        <div className={styles.poster}>
                            <img src={film.images.posterSrc} alt={`${film.title} poster`} width="218" height="327" />
                        </div>

                        <div className={styles.description}>
                            <MovieNav
                                filmId={film.id}
                            />
                            <Outlet />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
