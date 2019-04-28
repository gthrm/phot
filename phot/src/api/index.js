import axios from 'axios';

import { apiPrefix } from '../etc/config.json';

export default {
    
    listImg(page) {
        
        const request = axios.create({
            headers: {
                "Authorization": "Basic YWRtaW4xMjM6UXdlcnR5MTIz",
                "Content-Type": "application/json; charset=utf-8",
                'Accept': 'application/json'
            }
        });
        return request.get(`${apiPrefix}/images?page=${page}`);
    }
}