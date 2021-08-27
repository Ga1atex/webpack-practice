import { config } from './modules/config.js';
import AppService from './modules/app.service';
import './modules/header.component';
import './css/index.css';
import './less/index.less';

console.log('config', config.key);

const service = new AppService('Hello world!');
service.log();