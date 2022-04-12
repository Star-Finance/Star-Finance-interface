import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
    headers: {}
})

instance.interceptors.request.use((config) => config, (error) => {
    console.log(error);
    return Promise.reject(error);
})

instance.interceptors.response.use((config) => config, (error) => {
    console.log(error);
    return Promise.reject(error);
})

function get (config: AxiosRequestConfig) {
    return instance.request({...config, method: "GET"})
}

function post (config: AxiosRequestConfig) {
    return instance.request({...config, method: "POST"})
}

function put (config: AxiosRequestConfig) {
    return instance.request({...config, method: "PUT"})
}

function remove (config: AxiosRequestConfig) {
    return instance.request({...config, method: "DELETE"})
}

export default {
    get, post, put, remove
}