import React from 'react';
import * as styles from './movie-nav.module.scss';
import { NavLink } from 'react-router-dom';

export type Props = {
    filmId: number
};

const setNavLinkClassName = ({ isActive }: { isActive: boolean }): string => {
    return `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`;
}

export const MovieNav: React.FC<Props> = ({ filmId }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/overview`}
                        className={setNavLinkClassName}
                    >
                        Overview
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/details`}
                        className={setNavLinkClassName}
                    >
                        Details
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/reviews`}
                        className={setNavLinkClassName}
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
