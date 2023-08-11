import React, { useEffect, useMemo, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FaRegCircleXmark } from 'react-icons/fa6';
import { BsSearch } from 'react-icons/bs';
import { Box, Button, Input, Spinner, Stack, StackDivider, Text } from '@chakra-ui/react';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/apiServices/searchService';
import ProductItem from './ProductItem';


function Search() {
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResuilt] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    const inputRef = useRef();
    const debounce = useDebounce(searchValue, 500);

    const fetchApi = async () => {
        setLoading(true)
        const res = await searchServices.getListUser('');
        setLoading(false)
        return res
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetchApi();
                setData(response)
            } catch (e) {
                console.log({ e })
            }
        })()
    }, []);

    const searchData = useMemo(() => {
        if(!debounce?.length) return data
        return data.filter((user) => {
            const nameLowerCase = user.name.toLowerCase()
            const debounceLowerCase = debounce.toLowerCase()
            return nameLowerCase.includes(debounceLowerCase)
        })
    }, [data, debounce])

    const renderResult = useMemo(() => {
        if(!searchData?.length) return <Text color={'gray.500'} textAlign={'center'}>No result</Text>
        return <Stack w={'full'} divider={<StackDivider />} px={6} py={4}>
            {searchData.map((product)=>(
                <ProductItem key={product.id} data={product} />
            ))}
        </Stack>
    }, [searchData])

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
            visible={debounce?.length > 0}
            interactive
            render={(attrs) => (
                <Box
                    tabIndex={'-1'}
                    {...attrs}

                    paddingTop={'8px'}
                    maxHeight={'min((100vh-80px)-60px,734px)'}
                    minHeight={'100%'}
                    borderRadius={'8px'}
                    backgroundColor={'#fff'}
                    boxShadow={'md'}
                    fontSize={'xl'}
                >
                    <Text fontSize="xl" fontWeight={'600'} color={'blackAlpha.500'} mx={2}>
                        Products
                    </Text>
                    {renderResult}
                </Box>
            )}
            onClickOutside={handleHideResuilt}
        >
            <Box
                display={'flex'}
                position={'relative'}
                alignItems={'center'}
                width={{ base: '100%',md:'50s0px', lg: '250px' }}
                height={'40px'}
                backgroundColor={'gray.50'} //mau nen cua o tim kiem
                borderRadius={'96px'}
                paddingY={'12px'}
                paddingLeft={'12px'}
                _focus={{ outline: '2px solid blue', boxShadow: '0 0 5px blue' }}
            >
                <Input
                    ref={inputRef}
                    value={searchValue}
                    flex="1"
                    placeholder="Search Product"
                    spellCheck={false}
                    fontSize="1rem"
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
                    height="40px"
                    bg="transparent"
                    cursor={'pointer'}
                    borderTopRightRadius= '80px'
                    borderBottomRightRadius= '80px'
                    _hover={{
                        backgroundColor: 'green.500',
                        color:'white'
                    }}
                >
                    {/* Search */}
                    <BsSearch id="search-btn" fontSize="2rem" color="gray.800" _hover={{color:'white'}}/>
                </Button>
            </Box>
        </Tippy>
    );
}
export default Search;