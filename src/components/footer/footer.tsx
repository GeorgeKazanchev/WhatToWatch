import React from 'react';
import * as styles from './footer.module.scss';
import { Logo } from '../logo/logo';

type Props = {
    isMainPage?: boolean,
};

export const Footer: React.FC<Props> = ({ isMainPage = false }) => {
    return (
        <footer>
            <Logo
                isMainPage={isMainPage}
                isLight={true}
            />
            <div className={styles.copyright}>
                <p>© 2024 What to watch Ltd.</p>
            </div>
        </footer>
    );
};
