import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

const root = document.querySelector('#root');

if (!root) {
    throw new Error('Root not found');
}

const container = ReactDOM.createRoot(root);
container.render(<App />);
