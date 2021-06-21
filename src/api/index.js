import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000'})

export const createItem = (newItem) => API.post('/items', newItem)