import React from 'react';
import * as styles from './small-movie-card.module.scss';
import { Film } from '../../types/film';

type Props = {
    film: Film
};

export const SmallMovieCard: React.FC<Props> = ({ film }) => {
    return (
        <article className={styles.card}>
            <div className={styles.image}>
                <img src={film.images.previewSrc} alt={film.title} width="280" height="175" />
            </div>
            <h3 className={styles.title}>
                <a href={`/films/${film.id}`} className={styles.link}>{film.title}</a>
            </h3>
        </article>
    );
}
