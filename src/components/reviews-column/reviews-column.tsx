import React from 'react';
import * as styles from './reviews-column.module.scss';
import { Comment } from '../../types/comment';
import { getDateString, getDateAttributeString } from '../../helpers';

type Props = {
    reviews: Comment[]
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
