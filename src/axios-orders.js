import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://buena-hamburguesa.firebaseio.com/'
});

export default instance;
