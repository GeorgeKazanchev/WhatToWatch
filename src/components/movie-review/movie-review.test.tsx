import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { MovieReview } from './movie-review';
import { Comment, CommentAuthor } from '../../types/comment';

const testReviewAuthor: CommentAuthor = {
    id: 1,
    name: 'planktonrules',
};


const testReview: Comment = {
    id: 1,
    author: testReviewAuthor,
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
};

describe('Movie review', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <MovieReview
                    review={testReview}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
