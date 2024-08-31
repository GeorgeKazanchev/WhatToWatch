import React, { Fragment } from 'react';
import * as styles from './film-page.module.scss';
import { Catalog } from '../catalog/catalog';
import { Footer } from '../footer/footer';
import { Film } from '../../types/film';

type Props = {
    film: Film,
    similarFilms: Film[]
};

export const FilmPage: React.FC<Props> = ({film, similarFilms}) => {
    return (
        <Fragment>

            <div className={styles.content}>
                <Catalog
                    films={similarFilms}
                    isSimilarShown={true} />
                <Footer
                    isMainPage={false} />
            </div>
        </Fragment>
    );
};
