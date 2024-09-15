import React from 'react';
import * as styles from './small-movie-card.module.scss';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';

type Props = {
    film: Film
};

export const SmallMovieCard: React.FC<Props> = ({ film }) => {
    return (
        <article className={styles.card}>
            <Link to={`/films/${film.id}`}>
                <div className={styles.image}>
                    <img src={film.images.previewSrc} alt={film.title} width="280" height="175" />
                </div>
            </Link>
            <h3 className={styles.title}>
                <Link to={`/films/${film.id}`} className={styles.link}>{film.title}</Link>
            </h3>
        </article>
    );
};
