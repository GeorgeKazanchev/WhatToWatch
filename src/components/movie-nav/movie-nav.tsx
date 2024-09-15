import React from 'react';
import * as styles from './movie-nav.module.scss';
import { NavLink } from 'react-router-dom';

export type Props = {
    filmId: number
};

const getNavLinkClassName = (isActive: boolean): string => {
    let className = styles.navLink;
    if (isActive) {
        className += ` ${styles.navLinkActive}`;
    }
    return className;
};

export const MovieNav: React.FC<Props> = ({ filmId }) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/overview`}
                        className={({ isActive }) => getNavLinkClassName(isActive)}
                    >
                        Overview
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/details`}
                        className={({ isActive }) => getNavLinkClassName(isActive)}
                    >
                        Details
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink
                        to={`/films/${filmId}/reviews`}
                        className={({ isActive }) => getNavLinkClassName(isActive)}
                    >
                        Reviews
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
