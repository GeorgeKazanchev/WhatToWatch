import React from 'react';
import * as styles from './breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import type { Film } from '../../../../../shared/types';

type Props = {
    film: Film
};

export const Breadcrumbs: React.FC<Props> = ({ film }) => {
    return (
        <nav className={styles.breadcrumbs}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to={`/films/${film.id}`} className={styles.link}>{film.title}</Link>
                </li>
                <li className={styles.item}>
                    <a className={styles.link}>Add review</a>
                </li>
            </ul>
        </nav>
    );
};
