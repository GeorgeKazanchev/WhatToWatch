import React from 'react';
import * as styles from './footer.module.scss';

type Props = {
    isMainPage?: boolean
};

export const Footer: React.FC<Props> = ({ isMainPage = false }) => {
    return (
        <footer>
            <div>
                <a href={isMainPage ? undefined : '/'} className={styles.link}>
                    <span className={styles['letter-1']}>W</span>
                    <span className={styles['letter-2']}>T</span>
                    <span className={styles['letter-3']}>W</span>
                </a>
            </div>

            <div className={styles.copyright}>
                <p>© 2024 What to watch Ltd.</p>
            </div>
        </footer>
    );
};
