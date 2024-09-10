import { Film } from '../../types/film';

export const getGenres = (films: Film[]) => {
    return Array.from(new Set(films.map((film) => film.genre))).sort();
};

export const getRuntimeString = (runtimeInMinutes: number): string => {
    const MINUTES_IN_HOUR = 60;
    const runtime = Math.round(runtimeInMinutes);

    if (runtime === 0) {
        return '0';
    } else if (runtime > 0 && runtime < MINUTES_IN_HOUR) {
        return `${runtime}m`;
    } else if (runtime >= MINUTES_IN_HOUR) {
        const hours = Math.floor(runtimeInMinutes / MINUTES_IN_HOUR);
        const minutes = runtime - hours * MINUTES_IN_HOUR;
        return `${hours}h ${minutes}m`;
    } else {
        throw new RangeError(`Runtime (${runtime}) of the film is incorrect`);
    }
};

export const getRatingLevel = (rating: number): string => {
    const ratingRounded = Math.round(rating * 10) / 10;
    if (ratingRounded >= 0 && ratingRounded < 3) {
        return 'Bad';
    } else if (ratingRounded >= 3 && ratingRounded < 5) {
        return 'Normal';
    } else if (ratingRounded >= 5 && ratingRounded < 8) {
        return 'Good';
    } else if (ratingRounded >= 8 && ratingRounded < 10) {
        return 'Very good';
    } else if (ratingRounded === 10) {
        return 'Awesome';
    } else {
        throw new RangeError(`Rating (${ratingRounded}) of the film is incorrect`);
    }
};

export const getDateString = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
};

export const getDateAttributeString = (date: Date): string => {
    return `${date.getUTCFullYear()}-` +
        `${(date.getUTCMonth() + 1).toString().padStart(2, '0')}-` +
        `${date.getUTCDate().toString().padStart(2, '0')}`;
};
