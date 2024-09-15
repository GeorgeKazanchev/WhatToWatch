import React, { Fragment } from 'react';
import * as styles from './logo.module.scss';
import { Link } from 'react-router-dom';

type Props = {
    isMainPage?: boolean,
    isLight?: boolean
};

const getLogoLetters = () => {
    return (
        <Fragment>
            <span className={styles.letter1}>W</span>
            <span className={styles.letter2}>T</span>
            <span className={styles.letter3}>W</span>
        </Fragment>
    );
}

export const Logo: React.FC<Props> = ({ isMainPage = false, isLight = false }) => {
    return (
        <div>
            {isMainPage
                ? (
                    <a href={undefined} className={`${styles.link} ${isLight ? styles.linkLight : ''}`}>
                        {getLogoLetters()}
                    </a>
                )
                : (
                    <Link to='/' className={`${styles.link} ${isLight ? styles.linkLight : ''}`}>
                        {getLogoLetters()}
                    </Link>
                )
            }
        </div>
    );
};
