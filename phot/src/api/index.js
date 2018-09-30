import axios from 'axios';

import { apiPrefix } from '../etc/config.json';

export default {
    listImg() {
        return axios.get(`${apiPrefix}/imges`);
    }
}