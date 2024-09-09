import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { SmallMovieCard } from './small-movie-card';
import { Film } from '../../types/film';

const testFilm: Film = {
    id: 5,
    title: 'Fantastic Beasts: The Crimes of Grindelwald',
    images: {
        posterSrc: '/img/poster-fantastic-beasts-the-crimes-of-grindelwald.jpg',
        previewSrc: '/img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
        backgroundSrc: '/img/bg-fantastic-beasts-the-crimes-of-grindelwald.jpg',
        backgroundColor: '#ffffff'
    },
    videos: {
        videoLink: '#',
        previewVideoLink: '#'
    },
    description: 'The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.',
    rating: 5.2,
    scoresCount: 1644,
    director: 'David Yates',
    starring: [
        'Eddie Redmayne',
        'Katherine Waterston',
        'Dan Fogler'
    ],
    runtimeInMinutes: 134,
    genre: 'Fantasy',
    releaseYear: 2018,
    isFavorite: true
};

describe('Small movie card', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <SmallMovieCard
                    film={testFilm}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
