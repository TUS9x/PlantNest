import * as request from '~/utils/httpRequest';

export const getListUser = async (q, type = '') => {
    try {
        const res = await request.get('users', {
            params: {
                q, // q: q,
                type, // type: type,
            },
        });
        return res; //hoặc res.data tuy thuoc vao ket qua tra ve
    } catch (error) {
        console.log(error);
    }
};
//Tu cac component dung lai ApiService
