import axios from 'axios'

const request = axios.create({
    baseURL: '/'
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
