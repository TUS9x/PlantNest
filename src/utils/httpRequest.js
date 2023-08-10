import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/', //API endpoint (Diem cuoi truy cạp)
});

export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};

export default request;

//FILE NAY DUOC SU DUNG KHI
//custom them cac method put, path
//sua baseURL
