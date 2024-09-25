import React, { Fragment } from 'react';
import * as styles from './main-page.module.scss';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { MovieCard } from '../../../features/movie-card';
import { Catalog } from '../../../features/catalog';
import { ShowMoreButton } from '../../../entities/show-more-button';
import { Footer } from '../../../entities/footer';

export const MainPage: React.FC = () => {
    const promoFilm = useAppSelector((state) => state.films.promoFilm);
    const films = useAppSelector((state) => state.films.shownFilms);

    if (!promoFilm) {
        throw new Error('');    //  TODO: Handle this situation correctly
    }

    return (
        <Fragment>
            <MovieCard
                film={promoFilm}
            />

            <div className={styles.content}>
                <Catalog
                    films={films}
                    isGenresShown={true}
                >
                    <ShowMoreButton />
                </Catalog>

                <Footer
                    isMainPage={true}
                />
            </div>
        </Fragment>
    );
};
