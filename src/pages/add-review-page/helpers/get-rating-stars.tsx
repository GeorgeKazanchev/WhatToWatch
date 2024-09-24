import React, { Fragment } from 'react';
import * as styles from '../ui/add-review-page.module.scss';
import { MAX_RATING } from '../consts/consts';

export const getRatingStars = (): JSX.Element[] => {
    const defaultRatingChecked = 8;
    const ratingStars = [];

    for (let i = 1; i <= MAX_RATING; ++i) {
        ratingStars.push(
            <Fragment key={i}>
                <input
                    className={styles.ratingInput}
                    id={`star-${i}`}
                    type="radio"
                    name="rating"
                    value={i}
                    checked={i === defaultRatingChecked}
                    onChange={() => { console.log(`Rating ${i} is checked`); }}
                />
                <label
                    className={styles.ratingLabel}
                    htmlFor={`star-${i}`}
                >
                    {`Rating ${i}`}
                </label>
            </Fragment>
        );
    }

    return ratingStars;
};
