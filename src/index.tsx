import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store';
import * as styles from './index.module.scss';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { loadPromoFilm, loadFilms } from './store/reducers/films/films';
import { setAuthInfo } from './store/reducers/user/user';
import { promoFilm, films, authInfo } from './mocks';

const svgIcons = document.querySelector('.svg-icons');
svgIcons?.classList.add(styles.visuallyHidden);

const root = document.querySelector('#root');

if (!root) {
    throw new Error('Root not found');
}

store.dispatch(loadPromoFilm(promoFilm));
store.dispatch(loadFilms(films));
store.dispatch(setAuthInfo(authInfo));

const container = ReactDOM.createRoot(root);
container.render(
    <Provider store={store}>
        <App />
    </Provider>
);
