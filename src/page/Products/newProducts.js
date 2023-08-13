import React,{  useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import { 
    Box, 
    Button,
     Flex, 
     Stack, 
     Select, 
     Card,
     CardBody,
     Heading
     } from '@chakra-ui/react';
import { apiUrl } from '~/configs';

function NewProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios({
            method: 'get',
            //url: 'https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn',
            url: `${apiUrl}/api/all_products`,
            //url: 'https://52.253.98.98/api/all_products',
            data: {},
        })
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    
    return (
                <React.Fragment>
                    <Card direction='row' overflow="hidden" variant="outline" borderStyle="none" mb='1rem'>
                        <Flex 
                            direction='column'
                            alignItems={'center'} 
                            gap={6}
                            objectFit="cover"
                            width='80%'
                            >
                            <Box display={{ base: 'block', sm: 'grid' }} gridTemplateColumns="repeat(4,1fr)" gap={4}>
                                {products
                                    .map((product, index) => {
                                        while (index>6 && index < 10) {
                                            return (
                                                <Box key={product.prodID} display="flex" justifyContent="center" resize='60%'>
                                                    <Item 
                                                            name={product.prodName}  
                                                            price={product.prodPrice}  
                                                            img={product.imageUrl}
                                                            
                                                        />
                                                </Box>
                                            ) 
                                    }
                                })}
                            </Box>
                        </Flex>
                        <Stack width='24%' >
                            <CardBody >
                                <Heading fontFamily={'inherit'} fontSize={{ base: '2xl', sm: '6xl' }} fontWeight="normal" paddingTop="5rem">
                                    Best <br/>
                                    seller <br />
                                    today
                                </Heading>    
                            </CardBody>
                        </Stack>
                    </Card>       
                </React.Fragment>
    );
}

export default NewProducts;
