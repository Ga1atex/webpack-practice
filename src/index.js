import React from 'react';
import { render } from 'react-dom';
import { config } from './modules/config';
import AppService from './modules/app.service';
import App from './App.js';
import './modules/ts.module';
import './css/index.css';
import './less/index.less';
import './scss/index.scss';

console.log('config', config.key);

const service = new AppService('Hello world!');
service.log();

render(<App />, document.getElementById('app'));