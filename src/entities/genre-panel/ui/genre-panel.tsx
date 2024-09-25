import React from 'react';
import * as styles from './genre-panel.module.scss';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { selectAllGenres, setSelectedGenre } from '../../../store/reducers/films/films';
import { MAX_SHOWN_GENRES } from '../consts/consts';
import { ALL_GENRES_TITLE } from '../../../shared/consts/films';

export const GenrePanel: React.FC = () => {
    const shownGenres = useAppSelector(selectAllGenres).slice(0, MAX_SHOWN_GENRES);
    const selectedGenre = useAppSelector((state) => state.films.selectedGenre);

    const dispatch = useAppDispatch();

    const handleGenreClick = (genre: string, evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        evt.preventDefault();
        dispatch(setSelectedGenre(genre));
    };

    return (
        <ul className={styles.genres}>
            <li className={`${styles.genre} ${selectedGenre === ALL_GENRES_TITLE ? styles.genreActive : ''}`}>
                <a
                    href="#"
                    className={styles.genreLink}
                    onClick={(evt) => handleGenreClick(ALL_GENRES_TITLE, evt)}
                >
                    {ALL_GENRES_TITLE}
                </a>
            </li>

            {shownGenres.map((genre) =>
                <li key={genre} className={`${styles.genre} ${selectedGenre === genre ? styles.genreActive : ''}`}>
                    <a
                        href="#"
                        className={styles.genreLink}
                        onClick={(evt) => handleGenreClick(genre, evt)}
                    >
                        {genre}
                    </a>
                </li>
            )}
        </ul>
    );
}
