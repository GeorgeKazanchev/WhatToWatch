import React from 'react';
import * as styles from './header.module.scss';
import { Logo } from '../../logo';

type Props = {
    isMainPage?: boolean,
    isMoviePage?: boolean,
    isUserPage?: boolean,
    title?: string | null,
    children?: React.ReactNode,
};

export const Header: React.FC<Props> = (props) => {
    const {
        isMainPage = false,
        isMoviePage = false,
        isUserPage = false,
        title = null,
        children
    } = props;

    return (
        <header className={
            `${styles.header} ${isMoviePage ? styles.headerMoviePage : ''} ${isUserPage ? styles.headerUserPage : ''}`
        }>
            <Logo
                isMainPage={isMainPage}
                isLight={false}
            />

            {title && (
                <h1 className={styles.title}>{title}</h1>
            )}

            {children}
        </header>
    );
};
