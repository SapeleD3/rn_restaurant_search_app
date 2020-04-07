import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '5552b7865b0b30b3fd9e9fb950002674',
  },
});
