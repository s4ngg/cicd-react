import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://d5ag0ambmwchd.cloudfront.net',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;