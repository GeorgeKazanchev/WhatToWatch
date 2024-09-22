import React, { Fragment } from 'react';
import * as styles from './movie-card-content.module.scss';
import { Header } from '../../header';
import { UserBlock } from '../../user-block';
import { MovieCardInfo } from '../../movie-card-info';
import type { Film } from '../../../shared/types';

type Props = {
    film: Film,
    isFull?: boolean
};

export const MovieCardContent: React.FC<Props> = ({ film, isFull = false }) => {
    return (
        <Fragment>
            <div className={styles.background}>
                <img src={film.images.backgroundSrc} alt={film.title} />
            </div>

            <h1 className={styles.visuallyHidden}>WTW</h1>

            <Header
                isMainPage={!isFull}
                isMoviePage={true}
            >
                <UserBlock />
            </Header>

            <div className={styles.wrap}>
                {isFull
                    ? (
                        <MovieCardInfo
                            film={film}
                            isFull={isFull}
                        />
                    )
                    : (
                        <div className={styles.info}>
                            <MovieCardInfo
                                film={film}
                                isFull={isFull}
                            />
                        </div>
                    )
                }
            </div>
        </Fragment>
    );
};
