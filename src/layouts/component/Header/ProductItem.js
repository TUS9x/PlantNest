import { Link, NavLink } from 'react-router-dom';
import { Box,Text, Img, Flex } from '@chakra-ui/react';
// import { useSearchParams } from "react-router-dom";

function ProductItem({ data }) {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.productionInfor);
    return (
        <NavLink
            as={Link}
            to={{
                pathname: `/product/${data.id}`,
                // state: { data: data },
            }}
        >
            <Flex alignItems={'center'} justifyContent={'start'} __hover={{ bg: 'red' }}>
                <Box>
                    <Img
                        src="https://file.hstatic.net/1000284478/file/ht_nu_3_68c6cd1c78434d4088c511eca1613eba.jpg"
                        boxSize={'48px'}
                        objectFit="cover"
                        borderRadius={'8px'}
                        alt=""
                    />
                </Box>
                <Box>
                    <Text marginLeft={'12px'} fontSize={'1.6rem'} fontWeight={'600'} color={'black'}>
                        {data.name}
                    </Text>
                </Box>
            </Flex>
        </NavLink>
    );
}

export default ProductItem;
