import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, GridItem, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';
import { Button, Input, Flex, Box } from '@chakra-ui/react';

import RatingStars from './RatingStar';

function ProductionInfor(props) {
    const [callProducts, setCallProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [activeButton, setActiveButton] = useState(null);
    const { id } = useParams();

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName === activeButton ? null : buttonName);
    };
    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                setCallProducts(response.data);
            })
            .catch((error) => {
                console.error('xay ra loi', error);
            });
        setLoading(false);
    }, []);

    if (loading) {
        return <Text>Loading</Text>;
    }
    const src = [
        'https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg',
       "https://caycanhhanoi.vn/wp-content/uploads/2020/08/cay-tung-bong-lai-hop-menh-thuy-375x500.jpg",
       "https://tromoi.com/uploads/members/hnlha/tung%20bong%20lai.jpg",
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_T208k5OcHfsJuK632ZZ6QH9uezG-kaFzsjRR117GuAYsvCjHVxjA_K93-coyBKBsmg&usqp=CAU',
        'https://caycanhmienbac.com/wp-content/uploads/2020/10/tung-bong-lai.jpg',
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hinhanh,setHinhanh] = useState(src[1])
    const handleImg = (src) =>{
        setHinhanh(src)
    }
    return (
        <div>
            <Grid
                templateColumns={{ sm: 'repeat(1,1fr)', md: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
                gap={[4, 4, 6]}
                margin={4}
               
            >
                <GridItem minHeight={'500px'} justifyContent={{base:'center'}}>
                    <Img
                        width={{ sm: '100%', md: '600px' }}
                        src={hinhanh}
                    />
                    <Grid templateColumns="repeat(3,1fr)" gap={4} mt={2}>
                        {src.map((src, index) => (
                            <Img key={index} width={{ md: '180px' }} _hover={{ border: '1px solid gray' }} src={src} onClick={()=>{handleImg(src)}}/>
                        ))}
                        {/* <Img width={{md: "180px"}} _hover={{border: '1px solid gray'}}
                            src="https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg"
                        />
                        <Img width={{md: "180px"}} _hover={{border: '1px solid gray'}}
                            src="https://image-us.eva.vn/upload/2-2021/images/2021-06-11/1623377246-7-loai-cay-canh-pho-bien-nhung-co-doc-nen-can-nhac-ky-truoc-khi-trong.jpg"
                        /> */}
                    </Grid>
                </GridItem>
                <GridItem display={'flex'} flexDirection={'row'} gap={12} justifyContent={{base:'center'}}>
                    <Flex flexDirection={'column'} gap={12} width={{base: '100%'}}>
                        <Text fontSize={'4xl'} fontWeight={'bold'}>
                            Product name: {callProducts.name}
                        </Text>
                        <RatingStars />
                        <Flex flexDirection={'row'} gap={4}>
                            <Button
                                width={8}
                                colorScheme={activeButton === 'ButtonS' ? 'green' : 'gray'}
                                onClick={() => handleButtonClick('ButtonS')}
                            >
                                S
                            </Button>
                            <Button
                                width={8}
                                colorScheme={activeButton === 'ButtonM' ? 'green' : 'gray'}
                                onClick={() => handleButtonClick('ButtonM')}
                            >
                                M
                            </Button>
                            <Button
                                width={8}
                                colorScheme={activeButton === 'ButtonL' ? 'green' : 'gray'}
                                onClick={() => handleButtonClick('ButtonL')}
                            >
                                L
                            </Button>
                        </Flex>
                        <Text fontSize={'3xl'} fontWeight={'bold'}>
                            {' '}
                            Price: $ - - -{' '}
                        </Text>
                        <Text fontSize={'xl'} fontWeight={'semibold'}>
                            Description: abckhsflkjasdf
                        </Text>
                        <Flex direction={'row'}>
                            <Box border={'1px solid black'} borderRadius={'8px'}>
                                <Button border={'none'} bg={'transparent'} onClick={() => handleDecrease()}>
                                    -
                                </Button>
                                <Input
                                    border={'none'}
                                    width={6}
                                    textAlign={'center'}
                                    variant="unstyled"
                                    type="number"
                                    value={quantity}
                                />
                                <Button border={'none'} bg={'transparent'} onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </Button>
                            </Box>
                        </Flex>
                        <Button color={'white'} bg={'black'} width={{base:'full'}}>
                            Add to card
                        </Button>
                    </Flex>
                </GridItem>
            </Grid>
        </div>
    );
}

export default ProductionInfor;
