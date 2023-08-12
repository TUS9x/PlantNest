import React, { useState,  useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '~/configs';
function GlobalState(props) {
    const [products, setPosts] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            //url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
            url: `${apiUrl}/api/all_products`,
            //url: 'https://52.253.98.98/api/all_products',
            data: {},
        }).then((response) => {
            setPosts(response.data);
        });
    }, []);

    // console.log(products);

    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    );
}

export default GlobalState;
