import axios from 'axios'
axios.defaults.withCredentials = true;
const request = axios.create({
    baseURL: 'http://localhost:10086/'
})
export const successApi = () => {
    return request({
        url: '/success',
        method: 'get'
    })
}

export const failApi = () => {
    return request({
        url: '/fail',
        method: 'get'
    })
}

export default request
