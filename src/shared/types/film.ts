export type Film = {
    id: number,
    title: string,
    images: FilmImages,
    videos: FilmVideos,
    description: string,
    rating: number,
    scoresCount: number,
    director: string,
    starring: string[],
    runtimeInMinutes: number,
    genre: string,
    releaseYear: number,
    isFavorite: boolean,
};

export type FilmImages = {
    posterSrc: string,
    previewSrc: string,
    backgroundSrc: string,
    backgroundColor: string,
};

export type FilmVideos = {
    videoLink: string,
    previewVideoLink: string,
};
