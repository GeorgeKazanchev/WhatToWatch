import React from 'react';
import * as styles from './movie-review.module.scss';
import { getDateString, getDateAttributeString } from '../../helpers';
import { Comment } from '../../types/comment';

type Props = {
    review: Comment
};

export const MovieReview: React.FC<Props> = ({ review }) => {
    return (
        <div className={styles.review}>
            <blockquote className={styles.quote}>
                <p className={styles.text}>{review.text}</p>
                <footer className={styles.details}>
                    <cite className={styles.author}>{review.author.name}</cite>
                    <time className={styles.date} dateTime={getDateAttributeString(review.date)}>
                        {getDateString(review.date)}
                    </time>
                </footer>
            </blockquote>
            <div className={styles.rating}>{review.rating.toFixed(1)}</div>
        </div>
    );
};
