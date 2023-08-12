import { Link, NavLink } from 'react-router-dom';
import { Text, Img, Flex, HStack, Box } from '@chakra-ui/react';
// import { useSearchParams } from "react-router-dom";

function ProductItem({ data }) {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.productionInfor);
    return (
        <NavLink
            as={Link}
            to={{
                pathname: `/product/${data.proID}`,
                // state: { data: data },
            }}
        >
            <HStack alignItems={'center'} justifyContent={'start'} __hover={{ bg: 'red' }}>
                <Box>
                    <Img
                        src="https://file.hstatic.net/1000284478/file/ht_nu_3_68c6cd1c78434d4088c511eca1613eba.jpg"
                        boxSize={'48px'}
                        objectFit="cover"
                        borderRadius={'8px'}
                        alt=""
                    />
                </Box>
                <Text fontWeight={'600'} color={'black'}>
                    {data.prodName}
                </Text>
            </HStack>
        </NavLink>
    );
}

export default ProductItem;
