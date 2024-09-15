import React, { Fragment } from 'react';
import { createBrowserRouter, LoaderFunction, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { App } from '../components/app/app';
import { FilmPage } from '../components/film-page/film-page';
import { NotFoundPage } from '../components/not-found-page/not-found-page';
import { getSimilarFilms } from '../helpers/films-helper/films-helper';

const Root: React.FC = () => {
    return (
        <Fragment>
            <Outlet />
            <ScrollRestoration />
        </Fragment>
    );
}

export const AppRouterProvider = () => {
    const films = useAppSelector((state) => state.films.films);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <NotFoundPage />,
            children: [
                {
                    index: true,
                    element: <App />
                },
                {
                    path: 'films/:id',
                    element: <FilmPage />,
                    loader: (async ({ params }) => {
                        const film = films.find((film) => film.id.toString() === params.id);

                        if (!film) {
                            throw new Error('Film is not found');
                        }

                        const similarFilms = getSimilarFilms(film, films);
                        return {
                            film,
                            similarFilms
                        };
                    }) satisfies LoaderFunction
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};
