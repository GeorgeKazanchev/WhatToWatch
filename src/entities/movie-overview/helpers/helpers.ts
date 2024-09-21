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
