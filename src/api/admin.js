import axios from './axios.js'

export const getRegisters = () => axios.get('/admin/tickets')

export const declineRegister = (id) => axios.post('/admin/cancel-ticket', { id })

export const acceptRegister = (id) => axios.post('/admin/generate-ticket', { id })
