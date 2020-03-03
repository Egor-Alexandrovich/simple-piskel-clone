import 'babel-polyfill';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

import './scss/fonts.scss';
import './scss/reset.scss';
import './scss/style.scss';
import './LZWEncoder';
import './NeuQuant';
import './GIFEncoder';
import './b64';


import { app } from './app.js';


document.querySelector('.create').addEventListener('click', () => {
    document.querySelector('.landing-container').remove();
    app();
});
