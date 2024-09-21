import React from 'react';
import * as styles from './user-block.module.scss';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { checkIsAuthorized } from '../helpers/helpers';

export const UserBlock: React.FC = () => {
    const authInfo = useAppSelector((state) => state.user.authInfo);

    const isAuthorized = checkIsAuthorized(authInfo);
    const avatarUrl = authInfo?.avatarUrl ?? '';

    return (
        <div className={styles.container}>
            {isAuthorized
                ? (
                    <div className={styles.avatar}>
                        <Link to='/mylist'>
                            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
                        </Link>
                    </div>
                )
                : (
                    <Link to='/login' className={styles.link}>Sign in</Link>
                )
            }
        </div>
    );
};
