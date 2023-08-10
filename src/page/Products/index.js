import { useState, useEffect } from "react";
import axios from 'axios';
import Item from "../components/Item";
import { Box } from "@chakra-ui/react";

function Products() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios({
          method: 'get',
          url:'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
          //url: 'http://52.253.98.98:8080/api/product',
          //url:'https://my-json-server.typicode.com/typicode/demo/posts',
          data: {},
        })
        .then((response) => {
          setProducts(response.data);
        })
         .catch((error) => {
          console.error("Error fetching data:", error);
        })
      }, []); 
    //console.log("product:", products)
    return (
        <>
        <Box display={{base:'block', sm:'grid'}} gridTemplateColumns='repeat(4,1fr)' gap={4} width='100%'>
          {products.map( (product) => (
            <Item name={product.name} key={product.id} price={product.price}/>
          ))}
        </Box>
       </>
    ) 
}

export default Products;
