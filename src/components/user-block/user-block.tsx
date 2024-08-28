import React from 'react';
import * as styles from './user-block.module.scss';

type Props = {
    isAuthorized: boolean,
    avatarUrl?: string,
};

export const UserBlock: React.FC<Props> = ({ isAuthorized, avatarUrl = '' }) => {
    return (
        <div className={styles.container}>
            {
                isAuthorized
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
