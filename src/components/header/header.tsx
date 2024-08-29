import React from 'react';
import * as styles from './header.module.scss';
import { Logo } from '../logo/logo';
import { UserBlock } from '../user-block/user-block';

type Props = {
    isAuthorized: boolean,
    avatarUrl?: string,
    isMainPage?: boolean,
};

export const Header: React.FC<Props> = ({ isAuthorized, avatarUrl = '', isMainPage = false }) => {
    return (
        <header className={styles.header}>
            <Logo
                isMainPage={isMainPage}
                isLight={false} />
            <UserBlock
                isAuthorized={isAuthorized}
                avatarUrl={avatarUrl} />
        </header>
    );
};
