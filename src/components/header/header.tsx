import React from 'react';
import * as styles from './header.module.scss';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';

type Props = {
    isAuthorized: boolean,
    avatarUrl?: string,
    isMainPage?: boolean,
    isMoviePage?: boolean,
    isUserPage?: boolean
};

export const Header: React.FC<Props> = (props) => {
    const {
        isAuthorized,
        avatarUrl = '',
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
            <UserBlock
                isAuthorized={isAuthorized}
                avatarUrl={avatarUrl}
            />
        </header>
    );
};
