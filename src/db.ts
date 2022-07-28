import axios from 'axios';

export const deliveryStatus = axios.create({
  baseURL: 'https://proxyapp.correios.com.br/v1/sro-rastro/',
  responseType: 'json',
  timeout: 10000
})