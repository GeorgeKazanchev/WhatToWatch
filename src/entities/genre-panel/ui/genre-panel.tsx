import React from 'react';
import * as styles from './genre-panel.module.scss';

type Props = {
    genres: string[]
};

export const GenrePanel: React.FC<Props> = ({ genres }) => {
    return (
        <ul className={styles.genres}>
            <li className={`${styles.genre} ${styles.genreActive}`}>
                <a href="#" className={styles.genreLink}>All genres</a>
            </li>

            {genres.map((genre) =>
                <li key={genre} className={styles.genre}>
                    <a href="#" className={styles.genreLink}>{genre}</a>
                </li>
            )}
        </ul>
    );
}
