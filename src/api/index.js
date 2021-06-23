import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' })

export const createItem = (newItem) => API.post('/items/createItem', newItem)

export const getItems = () => API.get('/items')

export const updateItem = (id, itemToUpdate) => API.patch(`/items/${id}`, itemToUpdate)

export const deleteItem = id => API.delete(`/items/${id}`)