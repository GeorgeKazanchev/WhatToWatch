import React, { Fragment } from 'react';
import { createBrowserRouter, Outlet, redirect, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';
import { App } from '../components/app/app';
import { FilmPage } from '../components/film-page/film-page';
import { MovieOverview } from '../components/movie-overview/movie-overview';
import { MovieDetails } from '../components/movie-details/movie-details';
import { MovieReviews } from '../components/movie-reviews/movie-reviews';
import { NotFoundPage } from '../components/not-found-page/not-found-page';
import { comments } from '../mocks';
import { loader as filmPageLoader } from './loaders/film-page';

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
                    loader: ({params}) => filmPageLoader(films, params),
                    children: [
                        {
                            index: true,
                            loader: async () => redirect('overview')
                        },
                        {
                            path: 'overview',
                            loader: ({params}) => filmPageLoader(films, params),
                            element: <MovieOverview />
                        },
                        {
                            path: 'details',
                            loader: ({params}) => filmPageLoader(films, params),
                            element: <MovieDetails />
                        },
                        {
                            path: 'reviews',
                            element: <MovieReviews
                                reviews={comments}      //  TODO: Change data in props to real one (not mocks)
                            />
                        }
                    ]
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};
