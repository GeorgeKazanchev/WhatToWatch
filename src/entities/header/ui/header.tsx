import React from 'react';
import * as styles from './header.module.scss';
import { Logo } from '../../logo';
import { UserBlock } from '../../user-block';

type Props = {
    isMainPage?: boolean,
    isMoviePage?: boolean,
    isUserPage?: boolean
};

export const Header: React.FC<Props> = (props) => {
    const {
        isMainPage = false,
        isMoviePage = false,
        isUserPage = false
    } = props;

    return (
        <header className={
            `${styles.header} ${isMoviePage ? styles.headerMoviePage : ''} ${isUserPage ? styles.headerUserPage : ''}`
        }>
            <Logo
                isMainPage={isMainPage}
                isLight={false}
            />
            <UserBlock />
        </header>
    );
};
