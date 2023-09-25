import axios from './axios.js'

export const getBooks = (queries) => axios.get(`/books?${queries}`)

export const getBook = (id) => axios.get(`books/${id}`)

export const editBook = (id, data) => axios.post(`books/${id}`, data)

export const existBook = (id) => axios.get(`/books/${id}/exist`)

export const loadExcelBooks = (file) => axios.post('/books/excel', file)

export const downloadPDF = (id) => axios.get(`/books/${id}/get-pdf`, {
  responseType: 'blob'
})
