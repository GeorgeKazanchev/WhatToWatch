import React, { Fragment } from 'react';
import { createBrowserRouter, Outlet, redirect, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { App } from '../ui/app/app';
import { FilmPage } from '../../pages/film-page';
import { MovieOverview } from '../../entities/movie-overview';
import { MovieDetails } from '../../entities/movie-details';
import { MovieReviews } from '../../entities/movie-reviews';
import { NotFoundPage } from '../../pages/not-found-page';
import { comments } from '../../shared/mocks';

const Root: React.FC = () => {
    return (
        <Fragment>
            <Outlet />
            <ScrollRestoration />
        </Fragment>
    );
}

export const AppRouterProvider = () => {
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
                    children: [
                        {
                            index: true,
                            loader: async () => redirect('overview')
                        },
                        {
                            path: 'overview',
                            element: <MovieOverview />
                        },
                        {
                            path: 'details',
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
