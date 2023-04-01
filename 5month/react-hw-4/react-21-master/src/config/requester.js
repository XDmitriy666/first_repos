import axios from "axios";
import { Cookie } from "helpers/cookie";


export const api = axios.create({
    baseURL: 'http://localhost:2000/',
})

api.interceptors.request.use((config) => {
    // config.headers.Authorization = Cookie.getCookie('token');
    // config.headers['Content-Type'] = 'application-json';

    return config
})

api.interceptors.response.use(
    (response) => {
        return response
    }, 
    async (error) => {

    const originalReq = error.config
    const token = Cookie.getCookie('token')
    
    if (error.response.status === 401 && token) {
        const tokeRes = await axios.post('http://localhost:2000/refresh', { token })
        
        Cookie.setCookie('token', tokeRes.data.new_token)

        originalReq.headers.Authorization = tokeRes.data.new_token

        api.request(originalReq)
    }

    return error
})