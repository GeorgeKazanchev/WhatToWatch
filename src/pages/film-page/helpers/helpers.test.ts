import { describe, it, expect } from '@jest/globals';
import { getSimilarFilms } from './helpers';
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

describe('Get similar films', () => {
    it('Should return 1 film', () => {
        const selectedFilm = testFilms[2];
        const similarFilms = getSimilarFilms(
            selectedFilm,
            [testFilms[1]]
        );
        expect(similarFilms).toHaveLength(1);
        expect(similarFilms[0].genre).toBe(selectedFilm.genre);
        expect(similarFilms[0].id).not.toBe(selectedFilm.id);
    });

    it('Should return 0 films when a film with another genre has been passed', () => {
        const similarFilms = getSimilarFilms(
            testFilms[2],
            [testFilms[0]]
        );
        expect(similarFilms).toHaveLength(0);
    });

    it('Should return 0 films when all films array contains selected film only', () => {
        const similarFilms = getSimilarFilms(
            testFilms[2],
            [testFilms[2]]
        );
        expect(similarFilms).toHaveLength(0);
    });

    it('Should return 0 films when all films array has a zero length', () => {
        const similarFilms = getSimilarFilms(
            testFilms[2],
            []
        );
        expect(similarFilms).toHaveLength(0);
    });
});
