import axios from './axios.js'

export const loginRequest = (user) => axios.post('/auth/login', user)

export const registerRequest = (user) => axios.post('/auth/register', user)

export const registerTeacherRequest = (user) => axios.post('/auth/especial-register', user)

export const logoutRequest = () => axios.post('/auth/logout')

export const verifyTokenRequest = () => axios.get('/auth/verify')

export const verifyEmail = (token) => axios.get(`/auth/verify-email/${token}`)

export const sendEspecialAuthRequest = () => axios.post('/admin/register')

export const setCookiesRequest = () => axios.get('/auth/')
