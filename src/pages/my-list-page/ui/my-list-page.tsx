import React from 'react';
import * as styles from './my-list-page.module.scss';
import { useAppSelector } from '../../../shared/hooks/redux-typed-hooks';
import { selectFavoriteFilms } from '../../../store/reducers/films/films';
import { Header } from '../../../entities/header';
import { UserBlock } from '../../../entities/user-block';
import { Catalog } from '../../../features/catalog';
import { Footer } from '../../../entities/footer';

export const MyListPage: React.FC = () => {
    const favoriteFilms = useAppSelector(selectFavoriteFilms);

    return (
        <div className={styles.page}>
            <Header
                isUserPage={true}
                title='My list'
            >
                <UserBlock />
            </Header>

            <Catalog
                films={favoriteFilms}
            />

            <Footer
                isMainPage={false}
            />
        </div>
    )
};
