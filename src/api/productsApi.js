import axios from 'axios'

const productsApi = axios.create({
    baseURL : import.meta.env.API_BASE_URL    
})

productsApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})

export default productsApi