import React from 'react';
import * as styles from './movie-reviews.module.scss';
import { ReviewsColumn } from '../../reviews-column';
import type { Comment } from '../../../shared/types';

type Props = {
    reviews: Comment[]
};

export const MovieReviews: React.FC<Props> = ({ reviews }) => {
    const firstColReviewsCount = Math.ceil(reviews.length / 2);
    const firstColReviews = reviews.slice(0, firstColReviewsCount);
    const secondColReviews = reviews.slice(firstColReviewsCount, reviews.length);

    return (
        <div className={styles.reviews}>
            <ReviewsColumn
                reviews={firstColReviews}
            />
            <ReviewsColumn
                reviews={secondColReviews}
            />
        </div>
    );
};
