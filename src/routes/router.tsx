import React, { Fragment } from 'react';
import { createBrowserRouter, LoaderFunction, Outlet, redirect, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { App } from '../components/app/app';
import { FilmPage } from '../components/film-page/film-page';
import { MovieOverview } from '../components/movie-overview/movie-overview';
import { MovieDetails } from '../components/movie-details/movie-details';
import { MovieReviews } from '../components/movie-reviews/movie-reviews';
import { NotFoundPage } from '../components/not-found-page/not-found-page';
import { getSimilarFilms } from '../helpers/films-helper/films-helper';
import { comments } from '../mocks';

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
                    }) satisfies LoaderFunction,
                    children: [     //  TODO: Change data in props to real one (not mocks)
                        {
                            index: true,
                            loader: async () => redirect('overview')
                        },
                        {
                            path: 'overview',
                            element: <MovieOverview
                                film={films[0]}
                            />
                        },
                        {
                            path: 'details',
                            element: <MovieDetails
                                film={films[0]}
                            />
                        },
                        {
                            path: 'reviews',
                            element: <MovieReviews
                                reviews={comments}
                            />
                        }
                    ]
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};
