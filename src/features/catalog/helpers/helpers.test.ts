import { describe, it, expect } from '@jest/globals';
import { getCatalogTitle, getGenres } from './helpers';
import type { Film } from '../../../shared/types';

const testFilms: Film[] = [
    {
        id: 2,
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
    },
    {
        id: 3,
        title: 'Bohemian Rhapsody',
        images: {
            posterSrc: '/img/poster-bohemian-rhapsody.jpg',
            previewSrc: '/img/bohemian-rhapsody.jpg',
            backgroundSrc: '/img/bg-bohemian-rhapsody.jpg',
            backgroundColor: '#ffffff'
        },
        videos: {
            videoLink: '#',
            previewVideoLink: '#'
        },
        description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
        rating: 4.9,
        scoresCount: 3565,
        director: 'Bryan Singer',
        starring: [
            'Rami Malek',
            'Lucy Boynton',
            'Gwilym Lee'
        ],
        runtimeInMinutes: 134,
        genre: 'Biography',
        releaseYear: 2018,
        isFavorite: true
    },
    {
        id: 5,
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
    }
];

describe('Get genres', () => {
    it('Should return 2 genres from 2 films with different genres', () => {
        const genres = getGenres([testFilms[0], testFilms[1]]);
        expect(genres).toHaveLength(2);
        expect(genres).toContain('Biography');
        expect(genres).toContain('Fantasy');
    });

    it('Should return 1 genre from 2 films with the same genre', () => {
        const genres = getGenres([testFilms[1], testFilms[2]]);
        expect(genres).toHaveLength(1);
        expect(genres).toContain('Biography');
    });

    it('Should return 1 genre from 1 film', () => {
        const genres = getGenres([testFilms[0]]);
        expect(genres).toHaveLength(1);
    });

    it('Should return an empty genre list', () => {
        expect(getGenres([])).toEqual([]);
    });
});

describe('Get catalog title', () => {
    it('Should return "Catalog" if there is not a film page', () => {
        expect(getCatalogTitle(testFilms, false)).toBe('Catalog');
    });

    it('Should return "More like this" if there is a film page', () => {
        expect(getCatalogTitle(testFilms, true)).toBe('More like this');
    });

    it('Should return null if there are no similar films on a film page', () => {
        expect(getCatalogTitle([], true)).toBe(null);
    });
});
