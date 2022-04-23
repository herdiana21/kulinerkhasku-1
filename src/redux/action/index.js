import axios from 'axios';
import {BASE_URL} from '../../config';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.timeout = 1000 * 60;
axios.defaults.baseURL = BASE_URL;

export * from './pengunjungAction';
