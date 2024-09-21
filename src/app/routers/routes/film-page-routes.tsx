import React from 'react';
import { Navigate } from 'react-router-dom';
import { FilmPage } from '../../../pages/film-page';
import { MovieOverview } from '../../../entities/movie-overview';
import { MovieDetails } from '../../../entities/movie-details';
import { MovieReviews } from '../../../entities/movie-reviews';
import { comments } from '../../../shared/mocks';

export const filmPageRoutes = {
    path: 'films/:id',
    element: <FilmPage />,
    children: [
        {
            index: true,
            element: <Navigate to='overview' replace={true} />
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
};
