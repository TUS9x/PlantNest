import { useParams, useSearchParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import * as searchServices from '~/apiServices/searchService';
import axios from 'axios';

function ProductionInfor(props) {
    const [callProducts, setCallProducts] = useState([]);

    const { productionInfor } = useParams();
    console.log(productionInfor);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${productionInfor}`)
        .then(response =>{
            setCallProducts(response.data)
        })
        .catch(error=>{
            console.error('xay ra loi',error)
        })
    },[])
    return (
        <div>
            <h1> PRODUCTION INFOR PAGE</h1>
            <p> thong tin san pham</p>
            <div>{callProducts.phone}</div>
        </div>
    );
}

export default ProductionInfor;
