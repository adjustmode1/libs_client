import axios from 'axios';

let url = 'http://localhost:3500';

let instance = axios.create({
    withCredentials:true,
    baseURL:url
});
export default instance;