import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/'

export const axiosWithOutToken = async (endpoint, data, method = 'GET') => {

    if (method === 'GET') {
        return  await axios.get(endpoint);
    }else {
        return await axios.request(endpoint, {
        method,
        data,
    });
   }
 };
