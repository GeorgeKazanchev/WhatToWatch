import React from 'react';
import * as styles from './not-found-page.module.scss';

export const NotFoundPage: React.FC = () => {
    return (
        <section className={styles.container}>
            <p className={styles.message}>404 Not Found</p>
        </section>
    );
};
