import axios from './axios.js'

export const saveBookUser = (book) => axios.post('/user/save-favorite-book', book)

export const removeBookUser = (book) => axios.post('/user/delete-favorite-book', book)

export const getFavoriteBooks = () => axios.get('/user/books-save')
