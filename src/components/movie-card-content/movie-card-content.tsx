import React, { Fragment } from 'react';
import * as styles from './movie-card-content.module.scss';
import { Header } from '../header/header';
import { MovieCardInfo } from '../movie-card-info/movie-card-info';
import { Film } from '../../types/film';
import { AuthInfo } from '../../types/auth-info';

type Props = {
    film: Film,
    isAuthorized: boolean,
    authInfo?: AuthInfo | null,
    isFull?: boolean
};

export const MovieCardContent: React.FC<Props> = ({ film, isAuthorized, authInfo = null, isFull = false }) => {
    return (
        <Fragment>
            <div className={styles.background}>
                <img src={film.images.backgroundSrc} alt={film.title} />
            </div>

            <h1 className={styles.visuallyHidden}>WTW</h1>

            <Header
                isAuthorized={isAuthorized}
                avatarUrl={authInfo?.avatarUrl}
                isMainPage={true}
                isMoviePage={true}
            />

            <div className={styles.wrap}>
                {isFull
                    ? (
                        <MovieCardInfo
                            film={film}
                            isAuthorized={isAuthorized}
                            isFull={isFull}
                        />
                    )
                    : (
                        <div className={styles.info}>
                            <MovieCardInfo
                                film={film}
                                isAuthorized={isAuthorized}
                                isFull={isFull}
                            />
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
};
