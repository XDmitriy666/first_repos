import axios from "axios";


export const api = axios.create({
    baseURL: 'http://localhost:8000/',
})

api.interceptors.request.use((config) => {
    // config.headers.Authorization = 'Bearer HELLO WORLD';
    config.headers['Content-Type'] = 'application-json';

    return config
})

api.interceptors.response.use((response) => {
    return response
}, (error) => {

    // const request = error.request
    // error.request(request)

    return error
})