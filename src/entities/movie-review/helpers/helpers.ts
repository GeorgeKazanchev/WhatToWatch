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
