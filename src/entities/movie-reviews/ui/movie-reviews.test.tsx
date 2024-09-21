import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { MovieReviews } from '../index';
import type { Comment, CommentAuthor } from '../../../shared/types';

const testReviewsAuthors: CommentAuthor[] = [
    {
        id: 1,
        name: 'planktonrules',
    },
    {
        id: 2,
        name: 'perica-43151',
    },
    {
        id: 3,
        name: 'iliasalk',
    }
];

const testReviews: Comment[] = [
    {
        id: 1,
        author: testReviewsAuthors[0],
        rating: 8,
        text: 'Wes Anderson\'s films are really hard to describe or define. Suffice ' +
            'to say that he is unique in his style--very unique. This uniqueness is what makes ' +
            '"The Grand Budapest Hotel" worth seeing. It\'s an odd story where a story is told ' +
            'within a story--and it\'s filled with famous actors making lots of odd cameos. And, ' +
            'like Anderson\'s other films, it\'s full of odd characters, unusual dialog and brisk-paced ' +
            'editing. And, not surprisingly, it\'s NOTHING like other films by other directors.\nThe bottom ' +
            'line is that all these weird factors work together to make a film that you\'ll probably ' +
            'enjoy--but, like me, you won\'t be exactly sure why!',
        date: new Date('2014-06-15T00:00:00.000Z'),
    },
    {
        id: 2,
        author: testReviewsAuthors[1],
        rating: 9,
        text: 'If you like Wes Anderson, you will love this movie. Witty, entertaining and pleasant, ' +
            'it is a comedy in his unique style, that hits all the tones and notes that make him a unique and ' +
            'original director.',
        date: new Date('2018-06-27T00:00:00.000Z'),
    },
    {
        id: 3,
        author: testReviewsAuthors[2],
        rating: 3,
        text: 'A totally dysfunctional and unrelated cast, an incomprehensible story and ' +
            'tons and tons of computer graphics. The result is a confusing and totally boring movie. ' +
            'A waste of money.',
        date: new Date('2018-12-21T00:00:00.000Z'),
    },
];

describe('Movie reviews', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <MovieReviews
                    reviews={testReviews}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
