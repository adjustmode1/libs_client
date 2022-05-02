import axios from 'axios';

let url = 'http://localhost:3500';


export default axios.create({baseURL:url});