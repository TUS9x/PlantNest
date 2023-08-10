//dung de dang ky dang nhap

import * as request from '~/utils/httpRequest';

export const search = async (q, type = '') => {
    try {
        const res = await request.get('categories', {
            params: {
                q, // q: q,
                type, // type: type,
            },
        });
        console.log(res)
        return res; //hoặc res.data tuy thuoc vao ket qua tra ve
    } catch (error) {
        console.log(error);
    }
};

//Tu cac component dung lai ApiService
