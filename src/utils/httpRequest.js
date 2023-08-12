import axios from 'axios';

const request = axios.create({
    baseURL: 'http://52.253.98.98:8080/api/'
    //baseURL: 'https://jsonplaceholder.typicode.com/', //API endpoint (Diem cuoi truy cạp)
    //url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
    //url: 'https://52.253.98.98/api/all_products',
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;

//FILE NAY DUOC SU DUNG KHI
//custom them cac method put, path
//sua baseURL
