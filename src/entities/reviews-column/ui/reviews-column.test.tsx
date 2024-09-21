import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { ReviewsColumn } from '../index';
import type { Comment, CommentAuthor } from '../../../shared/types';

const testReviewsAuthors: CommentAuthor[] = [
    {
        id: 1,
        name: 'perica-43151',
    },
    {
        id: 2,
        name: 'iliasalk',
    }
];

const testReviews: Comment[] = [
    {
        id: 1,
        author: testReviewsAuthors[0],
        rating: 9,
        text: 'If you like Wes Anderson, you will love this movie. Witty, entertaining and pleasant, ' +
            'it is a comedy in his unique style, that hits all the tones and notes that make him a unique and ' +
            'original director.',
        date: new Date('2018-06-27T00:00:00.000Z'),
    },
    {
        id: 2,
        author: testReviewsAuthors[1],
        rating: 3,
        text: 'A totally dysfunctional and unrelated cast, an incomprehensible story and ' +
            'tons and tons of computer graphics. The result is a confusing and totally boring movie. ' +
            'A waste of money.',
        date: new Date('2018-12-21T00:00:00.000Z'),
    },
];

describe('Reviews column', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <ReviewsColumn
                    reviews={testReviews}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
