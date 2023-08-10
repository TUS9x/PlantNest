import React from 'react';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { Box, Button, Input, Spinner, Text } from '@chakra-ui/react';

import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchService';
import ProductItem from './ProductItem';

function Search() {
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResuilt] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchProducts([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce);
           
            console.log('dong 30',debounce)

            setSearchProducts(result);
            // console.log('result=',result)
            setLoading(false);
        };
        fetchApi();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchProducts([]);
    };
    const handleHideResuilt = () => {
        setShowResuilt(false);
    };

    return (
        <Tippy
            visible={showResult && searchProducts.length > 0}
            interactive
            render={(attrs) => (
                <Box
                    tabIndex={'-1'}
                    {...attrs}
                   
                    paddingTop={'8px'}
                    maxHeight={'min((100vh-96px)-60px,734px)'}
                    minHeight={'100%'}
                    borderRadius={'8px'}
                    backgroundColor={'#fff'}
                    boxShadow={'md'}
                    fontSize={'2xl'}
                 
                >
                    <div>
                        <Text fontSize="xl" fontWeight={'600'} color={'blackAlpha.500'}>
                            Products
                        </Text>
                        {searchProducts.map((product)=>(
                            <ProductItem key={product.id} data ={product} />
                        ))}
                    </div>
                </Box>
            )}
            onClickOutside={handleHideResuilt}
        >
            <Box
                display={'flex'}
                position={'relative'}
                alignItems={'center'}
                width={{ base: '100%',md:'60s0px', lg: '361px' }}
                height={'46px'}
                backgroundColor={'gray.50'} //mau nen cua o tim kiem
                borderRadius={'96px'}
                paddingY={'12px'}
                paddingLeft={'16px'}
                _focus={{ outline: '2px solid blue', boxShadow: '0 0 5px blue' }}
            >
                <Input
                    ref={inputRef}
                    value={searchValue}
                    flex="1"
                    placeholder="Search Product"
                    spellCheck={false}
                    fontSize="1.6rem"
                    height={'46px'}
                    color="black "
                    bg="transparent"
                    variant="unstyled"
                    focusBorderColor="Brown"
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResuilt(true)}
                />
                {!!searchValue && !loading && (
                    <Button position={'absolute'} right={'52px'} height={'46px'} bg="transparent" onClick={handleClear}>
                        {/* clear */}
                        <FaRegCircleXmark fontSize="2rem" color="gray" />
                    </Button>
                )}
                {loading && (
                    <Button position={'absolute'} right={'52px'} height={'46px'} bg="transparent">
                        {/* loading */}
                        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="gray.500" size="lg" />
                    </Button>
                )}
                <Button
                    width="52px"
                    height="46px"
                    bg="transparent"
                    cursor={'pointer'}
                    _hover={{
                        borderTopRightRadius: '96px',
                        borderBottomRightRadius: '96px',
                        backgroundColor: 'yellow.500',
                    }}
                >
                    {/* Search */}
                    <BsSearch id="search-btn" fontSize="2rem" color="gray" />
                </Button>
            </Box>
        </Tippy>
    );
}

export default Search;
