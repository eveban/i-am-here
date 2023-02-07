import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://192.168.1.14:3334/',
  baseURL: 'https://server.angelelli.com.br',
});
