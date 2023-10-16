import axios from './axios.js'
export const getSuggests = () => axios.get('/suggests/')
