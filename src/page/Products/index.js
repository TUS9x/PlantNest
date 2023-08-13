import React,{ useContext, useState, useEffect,useLayoutEffect } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import { Box, Button, Flex, HStack, Select } from '@chakra-ui/react';
import { last, orderBy } from 'lodash';
import { apiUrl } from '~/configs';

//import { useAppContext } from '~/App';

const styleSearch = { height: '20px', width: '100%', display: 'flex', alignItems: 'center', padding: '' };
const widthLine = 200; // px
function Products() {
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(8);
    const shouldShowButton = limit <= products.length;
    const [maxPrice, setMaxPrice] = useState(1);
    const [priceOnMove, setPriceOnMove] = useState(0);
    const [priceOnPoint, setPriceOnPoint] = useState(0);
    const [moved, setMoved] = useState(false);
    const [selectPointPosition, setSelectPointPosition] = useState(widthLine);
    const [selectMovePosition, setSelectMovePosition] = useState('0');
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
                const max = last(orderBy(response.data, 'price')).prodPrice;
                setPriceOnPoint(max);
                setMaxPrice(max);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useLayoutEffect(() => {
        const searchLine = document.getElementById('searchLine');
        const eventOnLine = searchLine.addEventListener('click', (e) => {
            if (e.target.tagName === 'DIV') {
                const lineX = e.target.getBoundingClientRect().left;
                const mouseX = e.clientX;
                setSelectPointPosition(mouseX - lineX);
                const currentPriceOnPoint = ((mouseX - lineX) / widthLine) * maxPrice;
                setPriceOnPoint(Math.floor(currentPriceOnPoint + 10 > maxPrice ? maxPrice : currentPriceOnPoint));
            }
        });
        const eventOnMove = searchLine.addEventListener('mousemove', (e) => {
            if (e.target.tagName === 'DIV') {
                const lineX = e.target.getBoundingClientRect().left;
                const mouseX = e.clientX;
                const currentPriceOnMove = ((mouseX - lineX) / widthLine) * maxPrice;
                setPriceOnMove(Math.floor(currentPriceOnMove + 10 > maxPrice ? maxPrice : currentPriceOnMove));
                setMoved(true);
                setSelectMovePosition(mouseX - lineX);
            }
        });
        const evenOutMove = searchLine.addEventListener('mouseout', (e) => setMoved(false));
        return () => {
            document.removeEventListener('click', eventOnLine);
            document.removeEventListener('mousemove', eventOnMove);
            document.removeEventListener('mouseout', evenOutMove);
        };
    }, [maxPrice]);

    //console.log("product:", products)
    const handleSort =(e)=>{
        if (e.target.value === 'AscendingName'){
            const sortProducts = [...products]
            sortProducts.sort((a,b)=> a.prodName.localeCompare(b.prodName, undefined, {sensitivity: 'base'}))
            setProducts(sortProducts)
        }
        if (e.target.value === 'DescendingName'){
            const sortProducts = [...products]
            sortProducts.sort((b,a)=> a.prodName.localeCompare(b.prodName, undefined, {sensitivity: 'base'}))
            setProducts(sortProducts)
        }
        if (e.target.value === 'AscendingPrice'){
            const sortProducts = [...products]
            sortProducts.sort((a,b)=>a.prodPrice - b.prodPrice)
            setProducts(sortProducts)
        }
        if (e.target.value ==='DescendingPrice'){
            const sortProducts = [...products]
            sortProducts.sort((a,b)=>b.prodPrice - a.prodPrice)
            setProducts(sortProducts)
        }
    }
    return (
                <React.Fragment>
                    <Flex direction={'column'} alignItems={'center'} gap={6}>
                        <Flex style={{ width: '100%',  
                            alignItems: 'center' }}     
                            paddingX={{base:'0', md:'40px'}} py='15px'
                            direction={{base:'column', md:'row'}}
                        >
                            <HStack alignItems={'flex-start'} ml={2} mr='1rem' width={{base:'340px', md:'210px'}}>
                                <Box width='70px' pt='7px'>Sort by:</Box>
                                <Select fontSize='14px'  onChange={(e)=> (handleSort(e))}>
                                    <option value='AscendingName'>Name, A-Z</option>
                                    <option value='DescendingName'>Name, Z-A</option>
                                    <option value='AscendingPrice' >Price, low to high</option>
                                    <option value='DescendingPrice' >Price, high to low</option>
                                </Select>
                            </HStack>
                            <Box width={{base:'340px', md:'800px'}} display='flex' flexDirection={'row'} mt={{base:'15px',md:'0'}}>
                                <Box width='80px' mr='0.4rem'>Price from: </Box>    
                                <Box>0</Box>
                                <Box
                                    id="searchLine"
                                    style={{
                                        margin: '10px 5px',
                                        borderRadius: '2px',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        height: '10px',
                                        width:'70%',
                                        //width: widthLine + 'px',
                                        background: '#c2b4b4',
                                    }}
                                >
                                    
                                    <p
                                        id="point"
                                        style={{
                                            left: selectPointPosition - 5,
                                            position: 'absolute',
                                            height: '10px',
                                            width: '10px',
                                            background: '#126f32',
                                            borderRadius: '50%',
                                        }}
                                    ></p>
                                    <p
                                        style={{
                                            display: moved ? 'none' : 'block',
                                            position: 'relative',
                                            top: '-30px',
                                            left: selectPointPosition - 8,
                                        }}
                                        id="priceOnMove"
                                    >
                                        {priceOnPoint}
                                    </p>
                                    <p
                                        style={{
                                            display: moved ? 'block' : 'none',
                                            position: 'absolute',
                                            top: '-30px',
                                            left: selectMovePosition - 8,
                                        }}
                                        id="priceOnMove"
                                    >
                                        {priceOnMove}
                                    </p>
                                </Box>
                                <Box fontWeight="bold">${maxPrice}</Box>                               
                            </Box>

                        </Flex>
                        <Box display={{ base: 'block', sm: 'grid' }} gridTemplateColumns="repeat(4,1fr)" gap={4} width="100%">
                            {products
                                .filter(item=>item.prodPrice<priceOnPoint)
                                .map((product, index) => {
                                    while (index < limit) {
                                        return (
                                            <Box key={product.prodID} display="flex" justifyContent="center">
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
                        <Box space>
                            {shouldShowButton && (
                                <Button
                                    size="md"
                                    color="white"
                                    bg="green.800"
                                    _hover={{ bg: 'green.800' }}
                                    width={40}
                                    onClick={() => setLimit(limit * 2)}
                                    mb="1rem"
                                    mr={'1rem'}
                                >
                                    Show more
                                </Button>
                            )}
                            <Button
                                ml={'1rem'}
                                size='md'
                                width={40}
                                onClick={()=>{
                                    setLimit(8)
                                }}
                                mb="1rem"
                            >
                                Show less
                            </Button>
                        </Box>
                    </Flex>   
                </React.Fragment>
    );
}

export default Products;
