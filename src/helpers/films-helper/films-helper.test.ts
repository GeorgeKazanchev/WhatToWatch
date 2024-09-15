import { describe, it, expect } from '@jest/globals';
import { Film } from '../../types/film';
import { getGenres, getRuntimeString, getRatingLevel, getDateAttributeString, getSimilarFilms } from './films-helper';

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

describe('Get runtime string', () => {
    it('Should return 0', () => {
        expect(getRuntimeString(0)).toEqual('0');
    });

    it('Should return minutes only', () => {
        expect(getRuntimeString(30)).toEqual('30m');
    });

    it('Should return hours and minutes', () => {
        expect(getRuntimeString(150)).toEqual('2h 30m');
    });

    it('Should throw error when a negative value was passed', () => {
        expect(() => { getRuntimeString(-1) }).toThrowError(RangeError);
    });
});

describe('Get rating level', () => {
    it('Should return the lowest level', () => {
        expect(getRatingLevel(0)).toEqual('Bad');
    });

    it('Should return the highest level', () => {
        expect(getRatingLevel(10)).toEqual('Awesome');
    });

    it('Should throw error when too large value was passed', () => {
        expect(() => { getRatingLevel(11) }).toThrowError(RangeError);
    });

    it('Should throw error when a negative value was passed', () => {
        expect(() => { getRatingLevel(-1) }).toThrowError(RangeError);
    });
});

describe('Get date attribute string', () => {
    it('Should return correct Unix epoch string', () => {
        expect(getDateAttributeString(new Date(0))).toEqual('1970-01-01');
    });

    it('Should return correct date with 2-sign day number', () => {
        const date = new Date(2024, 0, 11);
        const utcMonth = date.getUTCMonth() + 1;
        const utcDate = date.getUTCDate();
        expect(getDateAttributeString(date)).toEqual(`2024-0${utcMonth}-${utcDate}`);
    });

    it('Should return correct date with 2-sign month number', () => {
        const date = new Date(2024, 10, 2);
        const utcMonth = date.getUTCMonth() + 1;
        const utcDate = date.getUTCDate();
        expect(getDateAttributeString(date)).toEqual(`2024-${utcMonth}-0${utcDate}`);
    });
});

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
