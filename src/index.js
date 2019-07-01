import React from 'react';
import ReactDOM from 'react-dom';

import './static/fonts/roboto/KFOmCnqEu92Fr1Mu4mxK.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu4WxKOzY.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu5mxKOzY.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu7GxKOzY.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu7mxKOzY.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu7WxKOzY.woff2'
import './static/fonts/roboto/KFOmCnqEu92Fr1Mu72xKOzY.woff2'

import './index.css';
import App from './router';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
