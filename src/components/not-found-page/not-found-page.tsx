import React from 'react';
import * as styles from './not-found-page.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <section className={styles.content}>
                <p className={styles.message}>Page not found!</p>
                <Link to='/' className={styles.link}>Go to the main page</Link>
            </section>
        </div>
    );
};
