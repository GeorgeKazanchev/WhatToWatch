import React, { Fragment } from 'react';
import * as styles from './logo.module.scss';

type Props = {
    isMainPage?: boolean,
    isLight?: boolean
};

export const Logo: React.FC<Props> = ({ isMainPage = false, isLight = false }) => {
    return (
        <div>
            <a
                href={isMainPage ? undefined : '/'}
                className={`${styles.link} ${isLight ? styles.linkLight : ''}`}
            >
                <span className={styles.letter1}>W</span>
                <span className={styles.letter2}>T</span>
                <span className={styles.letter3}>W</span>
            </a>
        </div>
    );
};
