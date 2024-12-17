import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = async (page = 1, limit = 10) => {
  const response = await axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`);
  return {
    todos: response.data,
    total: parseInt(response.headers['x-total-count'] || '0'),
  };
};

export const getTodoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};