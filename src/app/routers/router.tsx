import React, { Fragment } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { useAppSelector } from '../../shared/hooks/redux-typed-hooks';
import { mainPageRoute } from './routes/main-page-route';
import { filmPageRoutes } from './routes/film-page-routes';
import { videoPlayerPageRoute } from './routes/video-player-page-route';
import { NotFoundPage } from '../../pages/not-found-page';
import { MyListPage } from '../../pages/my-list-page';
import { AddReviewPage } from '../../pages/add-review-page';
import { LoginPage } from '../../pages/login-page';

const Root: React.FC = () => {
    return (
        <Fragment>
            <Outlet />
            <ScrollRestoration />
        </Fragment>
    );
}

export const AppRouterProvider = () => {
    const authInfo = useAppSelector((state) => state.user.authInfo);
    const isAuthorized = !!authInfo;

    let router;

    if (isAuthorized) {
        router = createBrowserRouter([
            {
                path: '/',
                element: <Root />,
                errorElement: <NotFoundPage />,
                children: [
                    mainPageRoute,
                    {
                        path: 'login',
                        element: <Navigate to='/' replace={true} />
                    },
                    {
                        path: 'mylist',
                        element: <MyListPage />
                    },
                    {
                        path: 'films/:id/review',
                        element: <AddReviewPage />
                    },
                    videoPlayerPageRoute,
                    filmPageRoutes,
                ]
            }
        ]);
    } else {
        router = createBrowserRouter([
            {
                path: '/',
                element: <Root />,
                errorElement: <NotFoundPage />,
                children: [
                    mainPageRoute,
                    {
                        path: 'login',
                        element: <LoginPage />
                    },
                    {
                        path: 'mylist',
                        element: <Navigate to='/login' replace={true} />
                    },
                    {
                        path: 'films/:id/review',
                        element: <Navigate to='/login' replace={true} />
                    },
                    videoPlayerPageRoute,
                    filmPageRoutes
                ]
            }
        ]);
    }

    return <RouterProvider router={router} />;
};
