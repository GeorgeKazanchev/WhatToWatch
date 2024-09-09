import React from 'react';
import * as styles from './user-block.module.scss';
import { useAppSelector } from '../../hooks/redux-hooks';

export const UserBlock: React.FC = () => {
    const authInfo = useAppSelector((state) => state.user.authInfo);
    let isAuthorized: boolean, avatarUrl: string;

    if (authInfo) {
        isAuthorized = true;
        avatarUrl = authInfo.avatarUrl;
    } else {
        isAuthorized = false;
        avatarUrl = '';
    }

    return (
        <div className={styles.container}>
            {isAuthorized
                ? (
                    <div className={styles.avatar}>
                        <img src={avatarUrl} alt="User avatar" width="63" height="63" />
                    </div>
                )
                : (
                    <a href="#" className={styles.link}>Sign in</a>
                )
            }
        </div>
    );
};
