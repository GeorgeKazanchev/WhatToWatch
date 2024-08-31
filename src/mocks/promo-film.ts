import { Film } from '../types/film';

export const promoFilm: Film = {
    id: 1,
    title: 'The Grand Budapest Hotel',
    images: {
        posterSrc: 'img/the-grand-budapest-hotel-poster.jpg',
        previewSrc: '#',
        backgroundSrc: 'img/bg-the-grand-budapest-hotel.jpg',
        backgroundColor: '#ffffff'
    },
    videos: {
        videoLink: '#',
        previewVideoLink: '#'
    },
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Andreson',
    starring: [
        'Bill Murray',
        'Edward Norton',
        'Jude Law',
        'Willem Dafoe',
        'Saoirse Ronan'
    ],
    runtimeInMinutes: 99,
    genre: 'Comedy',
    releaseYear: 2014,
    isFavorite: true
};
