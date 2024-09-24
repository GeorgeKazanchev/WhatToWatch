import React from 'react';
import * as styles from './genre-panel.module.scss';
import { MAX_SHOWN_GENRES } from '../../../shared/consts/films';

type Props = {
    genres: string[]
};

export const GenrePanel: React.FC<Props> = ({ genres }) => {
    const shownGenres = genres.slice(0, MAX_SHOWN_GENRES);

    return (
        <ul className={styles.genres}>
            <li className={`${styles.genre} ${styles.genreActive}`}>
                <a href="#" className={styles.genreLink}>All genres</a>
            </li>

            {shownGenres.map((genre) =>
                <li key={genre} className={styles.genre}>
                    <a href="#" className={styles.genreLink}>{genre}</a>
                </li>
            )}
        </ul>
    );
}
