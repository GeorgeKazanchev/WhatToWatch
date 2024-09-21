import type { Comment, CommentAuthor } from '../types/comment';

export const commentsAuthors: CommentAuthor[] = [
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
    },
    {
        id: 4,
        name: 'Prismark10',
    },
    {
        id: 5,
        name: 'carmelarcher_01'
    },
    {
        id: 6,
        name: 'ThomasDrufke'
    }
];

export const comments: Comment[] = [
    {
        id: 1,
        author: commentsAuthors[0],
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
        author: commentsAuthors[1],
        rating: 9,
        text: 'If you like Wes Anderson, you will love this movie. Witty, entertaining and pleasant, ' +
            'it is a comedy in his unique style, that hits all the tones and notes that make him a unique and ' +
            'original director.',
        date: new Date('2018-06-27T00:00:00.000Z'),
    },
    {
        id: 3,
        author: commentsAuthors[2],
        rating: 3,
        text: 'A totally dysfunctional and unrelated cast, an incomprehensible story and ' +
            'tons and tons of computer graphics. The result is a confusing and totally boring movie. ' +
            'A waste of money.',
        date: new Date('2018-12-21T00:00:00.000Z'),
    },
    {
        id: 4,
        author: commentsAuthors[3],
        rating: 5,
        text: 'Fantastic Beasts: The Crimes of Grindelwald shows that J K Rowling should not ' +
            'be writing screenplays although I am sure Steve Kloves who is credited as Executive Producer ' +
            'had a hand in the script. It is also evident that the directorial duties needs a new vision. ' +
            'David Yates has been too long in the Potter world.',
        date: new Date('2018-11-22T00:00:00.000Z'),
    },
    {
        id: 5,
        author: commentsAuthors[4],
        rating: 4,
        text: 'Almost impossible to keep up with what was going on! Just jumped from one thing to ' +
            'the next with no development, such a shame',
        date: new Date('2018-12-31T00:00:00.000Z'),
    },
    {
        id: 6,
        author: commentsAuthors[5],
        rating: 2,
        text: 'I generally hate writing a review about a movie/tv episode that I hate. It feels ' +
            'like a waste of energy, especially knowing that there are plenty of people out there who ' +
            'genuinely enjoy this film series, but I\'m just not one of them. I LOVE the Harry Potter ' +
            'movies and grew up with those 8 films, but I\'ve never felt the connection to the Fantastic ' +
            'Beasts series that I did to Potter.',
        date: new Date('2018-12-08T00:00:00.000Z'),
    },
];
