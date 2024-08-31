import React from 'react';
import ReactDOM from 'react-dom/client';
import * as styles from './index.module.scss';
import { App } from './components/app/app';

const svgIcons = document.querySelector('.svg-icons');
svgIcons?.classList.add(styles.visuallyHidden);

const root = document.querySelector('#root');

if (!root) {
    throw new Error('Root not found');
}

const container = ReactDOM.createRoot(root);
container.render(<App />);
