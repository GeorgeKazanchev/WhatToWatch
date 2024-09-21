import React from 'react';
import * as styles from './reviews-column.module.scss';
import { MovieReview } from '../../movie-review';
import type { Comment } from '../../../shared/types';

type Props = {
    reviews: Comment[]
};

export const ReviewsColumn: React.FC<Props> = ({ reviews }) => {
    return (
        <div className={styles.column}>
            {reviews.map((review) =>
                <MovieReview
                    key={review.id}
                    review={review}
                />
            )}
        </div>
    );
};
