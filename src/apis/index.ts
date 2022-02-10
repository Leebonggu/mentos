import axios from 'axios';

export const serverAPI = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});