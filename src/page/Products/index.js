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
          //url: 'https://52.253.98.98:8080/api/product',
          data: {},
        })
        .then((response) => {
          setProducts(response.data);
          console.log("product:", response.data);
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
            <Item product={product} key={product.id}/>
          ))}
        </Box>
       </>
    ) 
}

export default Products;
