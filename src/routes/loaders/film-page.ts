import { LoaderFunctionArgs, Params } from 'react-router-dom';
import { getSimilarFilms } from '../../helpers/films-helper/films-helper';
import { Film } from '../../types/film';

export const loader = async (films: Film[], params: Params<string>) => {
    const film = films.find((film) => film.id.toString() === params.id);

    if (!film) {
        throw new Error('Film is not found');
    }

    const similarFilms = getSimilarFilms(film, films);
    return {
        film,
        similarFilms
    };
};

export type filmPageLoaderType = ({ params }: LoaderFunctionArgs<unknown>) => Promise<{ film: Film, similarFilms: Film[] }>;
