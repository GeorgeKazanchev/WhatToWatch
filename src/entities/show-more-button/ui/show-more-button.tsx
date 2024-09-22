import React from 'react';
import * as styles from './show-more-button.module.scss';

export const ShowMoreButton: React.FC = () => {
    return (
        <div>
            <button className={styles.button} type="button">Show more</button>
        </div>
    );
};
