import React from 'react';
import renderer from 'react-test-renderer';
import { describe, it, expect } from '@jest/globals';
import { Catalog } from './catalog';
import { Film } from '../../types/film';

const testFilms: Film[] = [
    {
        id: 1,
        title: 'The Aviator',
        images: {
            posterSrc: '/img/poster-aviator.jpg',
            previewSrc: '/img/aviator.jpg',
            backgroundSrc: '/img/bg-aviator.jpg',
            backgroundColor: '#ffffff'
        },
        videos: {
            videoLink: '#',
            previewVideoLink: '#'
        },
        description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
        rating: 7.7,
        scoresCount: 907,
        director: 'Martin Scorsese',
        starring: [
            'Leonardo DiCaprio',
            'Cate Blanchett',
            'Kate Beckinsale'
        ],
        runtimeInMinutes: 170,
        genre: 'Biography',
        releaseYear: 2004,
        isFavorite: true
    },
    {
        id: 2,
        title: 'We Need to Talk About Kevin',
        images: {
            posterSrc: '/img/poster-we-need-to-talk-about-kevin.jpg',
            previewSrc: '/img/we-need-to-talk-about-kevin.jpg',
            backgroundSrc: '/img/bg-we-need-to-talk-about-kevin.jpg',
            backgroundColor: '#ffffff'
        },
        videos: {
            videoLink: '#',
            previewVideoLink: '#'
        },
        description: 'Kevin\'s mother struggles to love her strange child despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
        rating: 6.8,
        scoresCount: 522,
        director: 'Lynne Ramsay',
        starring: [
            'Tilda Swinton',
            'John C. Reilly',
            'Ezra Miller'
        ],
        runtimeInMinutes: 112,
        genre: 'Drama',
        releaseYear: 2011,
        isFavorite: false
    }
];

describe('Catalog', () => {
    it('Correctly renders', () => {
        const tree = renderer
            .create(
                <Catalog
                    films={testFilms}
                />
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
