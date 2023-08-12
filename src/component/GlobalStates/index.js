import React, { useState,  useEffect } from 'react';
import axios from 'axios';
function GlobalState(props) {
    const [products, setPosts] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            //url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
            url: 'http://52.253.98.98:8080/api/all_products',
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
