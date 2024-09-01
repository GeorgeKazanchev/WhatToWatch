import React from 'react';
import * as styles from './reviews-column.module.scss';
import { Comment } from '../../types/comment';

type Props = {
    reviews: Comment[]
};

const getDateString = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
};

const getDateAttributeString = (date: Date): string => {
    return `${date.getUTCFullYear()}-` +
        `${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-` +
        `${date.getUTCDate().toString().padStart(2, '0')}`;
};

export const ReviewsColumn: React.FC<Props> = ({ reviews }) => {
    return (
        <div className={styles.column}>
            {reviews.map((review) =>
                <div key={review.id} className={styles.review}>
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
            )}
        </div>
    );
};
